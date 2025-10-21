import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set as setActiveQuestion } from '../../redux/slices/activeQuestion'
import { open } from '../../redux/slices/questionModal'
import { viewedQuestion } from '../../redux/slices/viewedQuestions'
import {
  open as openDD,
  close as closeDD,
} from '../../redux/slices/dailyDouble'
import { ReduxState } from '../../types'
type Prop = {
  points: number
  viewed: boolean
  categoryId: number
  questionId: number
}

const Component: React.FC<Prop> = ({
  points,
  viewed,
  categoryId,
  questionId,
}) => {
  const dispatch = useDispatch()
  const question = useSelector(
    (s: ReduxState) =>
      s.rounds[s.currentRound].categories[categoryId].questions[questionId]
  ) as { dailyDouble?: boolean }
  return (
    <div
      className={viewed ? 'tile question viewed' : 'tile question'}
      onClick={() => {
        if (viewed) return

        dispatch(
          setActiveQuestion({
            categoryIndex: categoryId,
            questionIndex: questionId,
          })
        )

        // mark viewed immediately
        dispatch(
          viewedQuestion({
            categoryIndex: categoryId,
            questionIndex: questionId,
          })
        )

        if (question?.dailyDouble) {
          // show overlay, wait ~1.8s then open modal
          dispatch(openDD())
          setTimeout(() => {
            dispatch(closeDD())
            dispatch(open())
          }, 1800)
        } else {
          dispatch(open())
        }
      }}
    >
      <span>${points}</span>
    </div>
  )
}

export default Component
