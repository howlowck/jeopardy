# Question Data Scripts

Utilities for editing Jeopardy round data via CSV.

## Files

| File | Description |
|---|---|
| `src/data/rounds.json` | Source of truth loaded by the app |
| `src/data/rounds.csv` | Editable flat view, generated from JSON |

---

## Workflow

### 1. Export JSON → CSV

```bash
npm run json-to-csv
```

Reads `src/data/rounds.json` and writes `src/data/rounds.csv`.

### 2. Edit the CSV

Open `src/data/rounds.csv` in Excel, Google Sheets, or any text editor.

**Column reference:**

| Column | Description | Example |
|---|---|---|
| `round_name` | Name of the round | `Round One` |
| `points_list` | Pipe-separated point values for the round | `100\|200\|300\|400\|500` |
| `category_title` | Category name | `Movie Numbers` |
| `question_index` | Row position within the category (0–4) | `0` |
| `prompt` | The clue shown to players | `(Title) ____ Days of Summer` |
| `answer` | The expected response | `What is 500` |
| `daily_double` | `true` to mark as Daily Double, leave blank otherwise | `true` |

**Rules:**
- Keep exactly 5 questions per category (`question_index` 0–4).
- Keep exactly 6 categories per round.
- The order of rounds and categories in the CSV determines the order in the app.
- Do not change column headers.

### 3. Import CSV → JSON

```bash
npm run csv-to-json
```

Reads `src/data/rounds.csv` and overwrites `src/data/rounds.json`. The app will pick up the changes on the next build/dev-server reload.
