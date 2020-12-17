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

export const addPokemonToFavoritesById = (pokemonId) => async (dispatch) => {
  // add new pokemon object to state favorites and return new array

  dispatch(updateFavoritePokemons(newFavoritePokemonsArray))
}
const {} = favoritePokemonsSlice.actions

export const removePokemonFromFavoritesById = (pokemonId) => async (
  dispatch,
) => {
  // find pokemon in state favorites by id and return new array without

  dispatch(updateFavoritePokemons(newFavoritePokemonsArray))
}
