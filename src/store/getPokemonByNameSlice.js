import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

import { POKEAPI_BASE_URL } from '../pokeapi'

export const getPokemonByNameSlice = createSlice({
  name: 'getPokemonByName',
  initialState: {
    pokemonFound: {},
  },
  reducers: {
    getPokemonByNameLoading: (state, action) => {
      console.log('getPokemonByNameLoading')

      return {
        ...state,
        isLoading: true,
      }
    },
    getPokemonByNameSuccess: (state, action) => {
      console.log('getPokemonByNameSuccess')
      console.log(action)
      state.pokemonFound = action.payload
      state.isLoading = false
      state.getPokemonError = null
    },
    getPokemonByNameFailed: (state, action) => {
      console.log('getPokemonByNameFailed')

      switch (action.type) {
        case 'POKEMON_NOT_FOUND': {
          state.getPokemonError = 'POKEMON_NOT_FOUND'
        }
        case 'API_ERROR': {
          state.getPokemonError = 'API_ERROR'
        }
        default: {
          state.getPokemonError = 'INVALID_ACTION_TYPE_ERROR'
        }
      }
      state.pokemonFound = {}
      state.isLoading = false
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
 * getPokemonByName
 * @param {object} dispatch - used to dispatch action
 * @return {function} logs error to console
 */

export const getPokemonByName = (pokemonName) => async (dispatch) => {
  dispatch(getPokemonByNameLoading)
  console.log('getting pokemon')
  try {
    await axios
      .get(`${POKEAPI_BASE_URL}/${pokemonName}`)
      .then((response) => dispatch(getPokemonByNameSuccess(response.data)))
  } catch (e) {
    /**
     * TODO: Dispatch error handling action
     */
    const prevState = state
    getPokemonByNameFailed(prevState)
    return console.error(e.message)
  }
}
