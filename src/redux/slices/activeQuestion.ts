import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionId } from '../../types'

const slice = createSlice({
  name: 'activeQuestion',
  initialState: {} as QuestionId | null,
  reducers: {
    set: (state, action: PayloadAction<QuestionId>) => {
      return action.payload
    },
    clear: () => {
      return null
    },
  },
})

export const { set, clear } = slice.actions

export default slice.reducer
