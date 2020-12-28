import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionId } from '../../types'

const slice = createSlice({
  name: 'viewedQuestions',
  initialState: [] as QuestionId[],
  reducers: {
    reset: () => {
      return []
    },
    viewedQuestion: (state, action: PayloadAction<QuestionId>) => {
      return [...state, action.payload]
    },
  },
})

export const { reset, viewedQuestion } = slice.actions

export default slice.reducer
