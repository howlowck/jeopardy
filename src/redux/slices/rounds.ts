import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Round } from '../../types'
import roundsData from '../../data/rounds.json'

const initialState: Round[] = roundsData as Round[]

const slice = createSlice({
  name: 'rounds',

  initialState: initialState as Round[],

  reducers: {
    setRounds: (state, action: PayloadAction<{ rounds: Round[] }>) => {},
  },
})

export const { setRounds } = slice.actions

export default slice.reducer
