import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CSV_PATH = resolve(__dirname, '../src/data/rounds.csv')
const JSON_PATH = resolve(__dirname, '../src/data/rounds.json')

// Parse a CSV string into an array of row arrays, respecting quoted fields
function parseCSV(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  // Normalize line endings
  const chars = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]

    if (inQuotes) {
      if (ch === '"') {
        // Peek ahead: escaped quote ("")
        if (chars[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        row.push(field)
        field = ''
      } else if (ch === '\n') {
        row.push(field)
        field = ''
        rows.push(row)
        row = []
      } else {
        field += ch
      }
    }
  }

  // Push the last field/row
  if (field !== '' || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows
}

const raw = readFileSync(CSV_PATH, 'utf-8')
const [headerRow, ...dataRows] = parseCSV(raw)

const COL = Object.fromEntries(headerRow.map((h, i) => [h.trim(), i]))

// Reconstruct rounds preserving the order rows appear in the CSV.
// Categories are identified by position (question_index === 0 starts a new one),
// not by title — this correctly handles duplicate titles like "Empty".
const roundMap = new Map() // round_name -> { name, pointsList, categories[] }

for (const row of dataRows) {
  if (row.every((cell) => cell === '')) continue // skip blank lines

  const roundName = row[COL['round_name']]
  const pointsList = row[COL['points_list']].split('|').map(Number)
  const categoryTitle = row[COL['category_title']]
  const questionIndex = Number(row[COL['question_index']])
  const prompt = row[COL['prompt']]
  const answer = row[COL['answer']]
  const dailyDouble = row[COL['daily_double']] === 'true' ? true : undefined

  if (!roundMap.has(roundName)) {
    roundMap.set(roundName, { name: roundName, pointsList, categories: [] })
  }

  const round = roundMap.get(roundName)

  // question_index 0 always means the start of a fresh category
  if (questionIndex === 0) {
    round.categories.push({ title: categoryTitle, questions: [] })
  }

  const category = round.categories[round.categories.length - 1]
  const question = { prompt, answer }
  if (dailyDouble) question.dailyDouble = dailyDouble
  category.questions[questionIndex] = question
}

const rounds = [...roundMap.values()].map(({ name, pointsList, categories }) => ({
  name,
  pointsList,
  categories,
}))

writeFileSync(JSON_PATH, JSON.stringify(rounds, null, 2), 'utf-8')
console.log(`Written: ${JSON_PATH}`)
