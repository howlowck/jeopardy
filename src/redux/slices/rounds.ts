import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Round } from '../../types'

const initialState: Round[] = []

const slice = createSlice({
  name: 'rounds',

  initialState: initialState as Round[],

  reducers: {
    setRounds: (state, action: PayloadAction<{ rounds: Round[] }>) => {},
  },
})

export const { setRounds } = slice.actions

export default slice.reducer
