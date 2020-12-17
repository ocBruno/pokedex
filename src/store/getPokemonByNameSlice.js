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
    getPokemonByNameLoading: (state, action) => {
      console.log('getPokemonByNameLoading')
      console.log(action)
      return {
        ...state,
        getPokemonIsLoading: true,
      }
    },
    getPokemonByNameSuccess: (state, action) => {
      console.log('getPokemonByNameSuccess')
      console.log(action)
      state.getPokemonResult = action.payload
      state.getPokemonIsLoading = false
      state.getPokemonError = null
    },
    getPokemonByNameFailed: (state, action) => {
      console.log('getPokemonByNameFailed')
      console.log(action)

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
 * getPokemonByName
 * @param {object} dispatch - used to dispatch action
 * @return {function} logs error to console
 */

export const getPokemonByName = (pokemonName) => async (dispatch) => {
  dispatch(getPokemonByNameLoading)
  console.log('getting pokemon')
  try {
    await pokeapi
      .get(`/pokemon/${pokemonName}`)
      .then((response) => dispatch(getPokemonByNameSuccess(response.data)))
  } catch (e) {
    /**
     * TODO: Dispatch error handling action
     */
    dispatch(getPokemonByNameFailed(e.message))
    return console.error(e.message)
  }
}
