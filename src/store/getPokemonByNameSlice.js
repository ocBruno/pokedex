import { createSlice } from '@reduxjs/toolkit'

import { pokeapi } from '../pokeapi/index'

export const getPokemonByNameSlice = createSlice({
  name: 'getPokemonByName',
  initialState: {
    getPokemonResult: null,
    getPokemonIsLoading: false,
    getPokemonError: null,
  },
  reducers: {
    getPokemonByNameLoading: (state) => {
      return {
        ...state,
        getPokemonIsLoading: true,
      }
    },
    getPokemonByNameSuccess: (state, action) => {
      state.getPokemonResult = action.payload
      state.getPokemonIsLoading = false
      state.getPokemonError = null
    },
    getPokemonByNameFailed: (state, action) => {
      state.getPokemonError = action.payload
      state.getPokemonResult = null
      state.getPokemonIsLoading = false
    },
  },
})

export default getPokemonByNameSlice.reducer

// Actions

const {
  getPokemonByNameSuccess,
  getPokemonByNameLoading,
  getPokemonByNameFailed,
} = getPokemonByNameSlice.actions

/**
 * @export function getPokemonByName
 * @param {String} pokemonName
 * searches for pokemon according to name
 * handles loading, success and error state dispatching actions accordingly
 * TODO: remove unnecessary properties from pokemon object
 */

export const getPokemonByName = (pokemonName) => async (dispatch) => {
  dispatch(getPokemonByNameLoading)
  try {
    await pokeapi
      .get(`/pokemon/${pokemonName}`)
      .then((response) => dispatch(getPokemonByNameSuccess(response.data)))
  } catch (e) {
    dispatch(getPokemonByNameFailed(e.message))
  }
}
