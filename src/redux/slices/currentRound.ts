import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'currentRound',

  initialState: 0,

  reducers: {
    setCurrentRound: (state, action: PayloadAction<{ roundIndex: number }>) => {
      return action.payload.roundIndex
    },
  },
})

export const { setCurrentRound } = slice.actions

export default slice.reducer
