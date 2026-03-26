import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  isOpen: boolean
  // confirmed wager saved after user confirms; null when none
  confirmedTeamIndex: number | null
  confirmedWager: number | null
  maxWager: number
}

const slice = createSlice({
  name: 'dailyDoubleWager',
  initialState: {
    isOpen: false,
    confirmedTeamIndex: null,
    confirmedWager: null,
    maxWager: 0,
  } as State,
  reducers: {
    open: (state, action: PayloadAction<{ maxWager: number }>) => {
      state.isOpen = true
      state.confirmedTeamIndex = null
      state.confirmedWager = null
      state.maxWager = action.payload.maxWager
    },
    close: (state) => {
      state.isOpen = false
    },
    confirm: (
      state,
      action: PayloadAction<{ teamIndex: number; wager: number }>
    ) => {
      state.isOpen = false
      state.confirmedTeamIndex = action.payload.teamIndex
      state.confirmedWager = action.payload.wager
    },
    clearConfirmed: (state) => {
      state.confirmedTeamIndex = null
      state.confirmedWager = null
      state.maxWager = 0
    },
  },
})

export const { open, close, confirm, clearConfirmed } = slice.actions

export default slice.reducer
