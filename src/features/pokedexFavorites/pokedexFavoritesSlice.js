import { createSlice } from '@reduxjs/toolkit'

export const pokedexFavoritesSlice = createSlice({
  name: 'pokedexFavorites',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const {
  increment,
  decrement,
  incrementByAmount,
} = pokedexFavoritesSlice.actions
export default pokedexFavoritesSlice.reducer
