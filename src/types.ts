import store from './redux/store'

export type Category = {
  title: string
  questions: [Question, Question, Question, Question, Question]
}

export type Question = {
  prompt: string
  answer: string
  dailyDouble?: boolean
}

export type Team = {
  name: string
  score: number
}

export type Categories = [
  Category,
  Category,
  Category,
  Category,
  Category,
  Category
]

export type Round = {
  name: string
  pointsList: Points
  categories: Categories
}

export type QuestionId = {
  categoryIndex: number
  questionIndex: number
}

export type Points = [number, number, number, number, number]

export type ReduxState = ReturnType<typeof store.getState>
