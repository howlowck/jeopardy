import { Epic } from 'redux-observable'
import { newRoundEpic } from './epics/newRoundEpic'
import { catchError } from 'rxjs/operators'
import { completeRoundEpic } from './epics/completeRoundEpic'
import { merge } from 'rxjs'
// Import Epics Here (do not delete this line)

const epics = [
  newRoundEpic,
  completeRoundEpic,
  // Add Epics Here (do not delete this line)
]

const rootEpic: Epic = (action$, store$, dependencies) =>
  merge(
    ...epics.map((epic) => epic(action$))
  ).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export default rootEpic
