import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

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

export const addPokemonToFavorites = (pokemon) => async (
  dispatch,
  getState,
) => {
  // add new pokemon object to active state favorites and return new array
  const state = getState()
  const updatedFavoritePokemonsArray = [
    ...state.favoritePokemons.favoritePokemons,
  ]
  updatedFavoritePokemonsArray.push(pokemon)
  dispatch(updateFavoritePokemons(updatedFavoritePokemonsArray))
}

export const removePokemonFromFavorites = (pokemon) => async (
  dispatch,
  getState,
) => {
  // find pokemon in state favorites and return new array without
  const state = getState()

  const updatedFavoritePokemonsArray = [
    ...state.favoritePokemons.favoritePokemons,
  ]
  const indexOfPokemonToRemove = updatedFavoritePokemonsArray.indexOf(pokemon)
  updatedFavoritePokemonsArray.splice(indexOfPokemonToRemove, 1)
  console.log(updatedFavoritePokemonsArray)
  dispatch(updateFavoritePokemons(updatedFavoritePokemonsArray))
}
