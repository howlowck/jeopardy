import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const JSON_PATH = resolve(__dirname, '../src/data/rounds.json')
const CSV_PATH = resolve(__dirname, '../src/data/rounds.csv')

// Wrap a field in quotes and escape internal quotes
function escapeField(value) {
  const str = value == null ? '' : String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"'
  }
  return str
}

const rounds = JSON.parse(readFileSync(JSON_PATH, 'utf-8'))

const headers = [
  'round_name',
  'points_list',
  'category_title',
  'question_index',
  'prompt',
  'answer',
  'daily_double',
]

const rows = [headers.join(',')]

for (const round of rounds) {
  const pointsList = round.pointsList.join('|')
  for (const category of round.categories) {
    category.questions.forEach((question, index) => {
      const row = [
        escapeField(round.name),
        escapeField(pointsList),
        escapeField(category.title),
        escapeField(index),
        escapeField(question.prompt),
        escapeField(question.answer),
        escapeField(question.dailyDouble ? 'true' : ''),
      ]
      rows.push(row.join(','))
    })
  }
}

writeFileSync(CSV_PATH, rows.join('\n'), 'utf-8')
console.log(`Written: ${CSV_PATH}`)
