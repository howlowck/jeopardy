import { combineEpics, Epic } from 'redux-observable'
import { newRoundEpic } from './epics/newRoundEpic'
import { catchError } from 'rxjs/operators'
import { completeRoundEpic } from './epics/completeRoundEpic'
// Import Epics Here (do not delete this line)

const epics = [
  newRoundEpic,
  completeRoundEpic,
  // Add Epics Here (do not delete this line)
]

const rootEpic: Epic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export default rootEpic
