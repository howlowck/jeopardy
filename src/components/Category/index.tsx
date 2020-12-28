import React from 'react'
import { Category, Points, QuestionId } from '../../types'
import TitleTile from '../TitleTile'
import QuestionTile from '../QuestionTile'

type Prop = {
  pointsList: Points
  category: Category
  categoryId: number
  viewedTiles: QuestionId[]
}

const Component: React.FC<Prop> = ({
  category,
  pointsList,
  viewedTiles,
  categoryId,
}) => {
  const viewedTilesInCategory = viewedTiles.filter(
    (_) => _.categoryIndex === categoryId
  )
  return (
    <div className="category">
      <TitleTile text={category.title} />
      {category.questions.map((q, i) => {
        const viewed = !!viewedTilesInCategory.find(
          (_) => _.questionIndex === i
        )
        return (
          <QuestionTile
            key={`q-${i}`}
            points={pointsList[i]}
            viewed={viewed}
            categoryId={categoryId}
            questionId={i}
          />
        )
      })}
    </div>
  )
}

export default Component
