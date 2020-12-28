import { Action, createAction } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'
import { filter, mergeMap } from 'rxjs/operators'
import { setCurrentRound } from '../slices/currentRound'
import { reset } from '../slices/viewedQuestions'
import { close } from '../slices/roundSelectionModal'

export const newRound = createAction<{ newRoundIndex: number }>('NEW_ROUND')

export const newRoundEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(newRound.match),
    mergeMap((action) => {
      return [
        setCurrentRound({ roundIndex: action.payload.newRoundIndex }),
        reset(),
        close(),
      ]
    })
  )
