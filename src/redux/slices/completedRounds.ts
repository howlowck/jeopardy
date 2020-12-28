import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'completedRounds',

  initialState: [] as number[],

  reducers: {
    addCompletedRound: (
      state,
      action: PayloadAction<{ roundIndex: number }>
    ) => {
      return [...state, action.payload.roundIndex]
    },
  },
})

export const { addCompletedRound } = slice.actions

export default slice.reducer
