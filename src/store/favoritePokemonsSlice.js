import { createSlice } from '@reduxjs/toolkit'

export const favoritePokemonsSlice = createSlice({
  name: 'favoritePokemons',
  initialState: {
    favoritePokemons: [],
  },
  reducers: {
    updateFavoritePokemons: (state, action) => {
      state.favoritePokemons = action.payload
    },
    getFavoritePokemons: (state, action) => {
      return state.favoritePokemons
    },
  },
})

export default favoritePokemonsSlice.reducer

// Actions

const {
  updateFavoritePokemons,
  getFavoritePokemons,
} = favoritePokemonsSlice.actions

export const addPokemonToFavorites = (pokemon) => async (dispatch) => {
  // add new pokemon object to active state favorites and return new array

  const newFavoritePokemonsArray = [pokemon]
  console.log(newFavoritePokemonsArray)

  dispatch(updateFavoritePokemons(newFavoritePokemonsArray))
}

export const removePokemonFromFavorites = (pokemon) => async (dispatch) => {
  // find pokemon in state favorites and return new array without
  // dispatch(updateFavoritePokemons(newFavoritePokemonsArray))
}
