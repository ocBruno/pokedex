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
  },
})

export default favoritePokemonsSlice.reducer

// Actions

const { updateFavoritePokemons } = favoritePokemonsSlice.actions

/**
 * @export function addPokemonToFavorites
 * @param {pokeapi.PokemonObject} pokemon
 * add new pokemon state favorites array and dispatch updated array
 */
export const addPokemonToFavorites = (pokemon) => async (
  dispatch,
  getState,
) => {
  const state = getState()
  const updatedFavoritePokemonsArray = [
    ...state.favoritePokemons.favoritePokemons,
  ]
  updatedFavoritePokemonsArray.push(pokemon)
  dispatch(updateFavoritePokemons(updatedFavoritePokemonsArray))
}

/**
 * @export function removePokemonFromFavorites
 * @param {pokeapi.PokemonObject} pokemon
 * remove pokemon from state favorites array and dispatch updated array
 */
export const removePokemonFromFavorites = (pokemon) => async (
  dispatch,
  getState,
) => {
  const state = getState()

  const updatedFavoritePokemonsArray = [
    ...state.favoritePokemons.favoritePokemons,
  ]
  const indexOfPokemonToRemove = updatedFavoritePokemonsArray.indexOf(pokemon)
  updatedFavoritePokemonsArray.splice(indexOfPokemonToRemove, 1)
  dispatch(updateFavoritePokemons(updatedFavoritePokemonsArray))
}
