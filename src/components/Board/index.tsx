import React from 'react'
import { Categories, Points, QuestionId } from '../../types'
import Category from '../Category'
import './styles.css'

type Prop = {
  pointsList: Points
  categories: Categories
  viewedTiles: QuestionId[]
}

const Component: React.FC<Prop> = ({ pointsList, categories, viewedTiles }) => {
  return (
    <div className="board">
      {categories.map((_, i) => (
        <Category
          key={`cat-${i}`}
          pointsList={pointsList}
          category={_}
          categoryId={i}
          viewedTiles={viewedTiles}
        />
      ))}
    </div>
  )
}

export default Component
