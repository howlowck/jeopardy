import React from 'react'
import { useDispatch } from 'react-redux'
import { set as setActiveQuestion } from '../../redux/slices/activeQuestion'
import { open } from '../../redux/slices/questionModal'
import { viewedQuestion } from '../../redux/slices/viewedQuestions'
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
        dispatch(open())
        dispatch(
          viewedQuestion({
            categoryIndex: categoryId,
            questionIndex: questionId,
          })
        )
      }}
    >
      <span>${points}</span>
    </div>
  )
}

export default Component
