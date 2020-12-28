import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'roundSelectionModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
  },
})

export const { open, close } = slice.actions

export default slice.reducer
