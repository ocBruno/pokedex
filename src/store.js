import { configureStore } from '@reduxjs/toolkit'

import favoritePokemonsReducer from './store/favoritePokemonsSlice'
import getPokemonByNameReducer from './store/getPokemonByNameSlice'

const store = configureStore({
  reducer: {
    favoritePokemons: favoritePokemonsReducer,
    getPokemonByName: getPokemonByNameReducer,
  },
})

export default store
