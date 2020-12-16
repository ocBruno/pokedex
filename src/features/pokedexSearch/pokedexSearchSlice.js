import { createSlice } from '@reduxjs/toolkit'

export const pokedexSearchSlice = createSlice({
  name: 'pokedexSearch',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementByAmount } = pokedexSearchSlice.actions

export default pokedexSearchSlice.reducer
