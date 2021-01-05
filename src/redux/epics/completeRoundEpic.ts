import { Action, createAction } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'
import { filter, mergeMap } from 'rxjs/operators'
import { addCompletedRound } from '../slices/completedRounds'
import { open } from '../slices/roundSelectionModal'

export const completeRound = createAction<{ completedRoundIndex: number }>(
  'COMPLETE_ROUND'
)

export const completeRoundEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(completeRound.match),
    mergeMap((action) => {
      return [
        addCompletedRound({
          roundIndex: action.payload.completedRoundIndex,
        }),
        open(),
      ]
    })
  )
