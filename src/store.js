import { configureStore } from '@reduxjs/toolkit'

import pokedexFavoritesReducer from './features/pokedexFavorites/pokedexFavoritesSlice'
import pokedexSearchReducer from './features/pokedexSearch/pokedexSearchSlice'

const store = configureStore({
  reducer: {
    pokedexFavorites: pokedexFavoritesReducer,
    pokedexSearch: pokedexSearchReducer,
  },
})

export default store
