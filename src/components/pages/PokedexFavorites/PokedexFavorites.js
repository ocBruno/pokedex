import React from 'react'
import { useSelector } from 'react-redux'

import PokemonCard from '../../shared/PokemonCard/PokemonCard'

import './PokedexFavorites.css'

/**
 * Pokedex Favorites Page
 * A temporary collection of the users favorite pokemon
 * Cleared when user refreshes page
 */
export default function PokedexFavorites(props) {
  const favoritePokemons = useSelector((state) => state.favoritePokemons)

  return (
    <div id="pokedex_favorites_page_container">
      {favoritePokemons.favoritePokemons.length === 0 ? (
        <>
          <h2 id="empty_favorites_header">
            Nenhum pokemon favorito adicionado..
          </h2>
          <div id="empty_favorites_message">
            Busque um pokemon e adicione-lo aos seus favoritos!
          </div>
        </>
      ) : (
        <div className="favorite-pokemons-container">
          {favoritePokemons.favoritePokemons.map((favoritePokemon) => {
            return (
              <PokemonCard
                pokemon={favoritePokemon}
                key={favoritePokemon.id}
                isFavorite={true}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
