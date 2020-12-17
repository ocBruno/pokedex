import { configureStore } from '@reduxjs/toolkit'

import favoritePokemonsReducer from './favoritePokemonsSlice'
import getPokemonByNameReducer from './getPokemonByNameSlice'

const store = configureStore({
  reducer: {
    favoritePokemons: favoritePokemonsReducer,
    getPokemonByName: getPokemonByNameReducer,
  },
})

export default store
