import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Team } from '../../types'

const slice = createSlice({
  name: 'teams',
  initialState: [
    {
      name: 'Dasher',
      score: 0,
    },
    {
      name: 'Prancer',
      score: 0,
    },
    {
      name: 'Blitzen',
      score: 0,
    },
  ] as Team[],
  reducers: {
    addTeam: (state) => {},
    addScore: (
      state,
      action: PayloadAction<{ teamIndex: number; points: number }>
    ) => {
      const { teamIndex, points } = action.payload
      state[teamIndex].score += points
    },
    removeScore: (
      state,
      action: PayloadAction<{ teamIndex: number; points: number }>
    ) => {
      const { teamIndex, points } = action.payload
      state[teamIndex].score -= points
    },
    resetScores: (state) => {
      return state.map((_) => ({
        ..._,
        score: 0,
      }))
    },
  },
})

export const { addTeam, addScore, removeScore, resetScores } = slice.actions

export default slice.reducer
