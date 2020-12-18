import './PokedexFavorites.css'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../../shared/PokemonCard/PokemonCard'

/**
 * @export function PokedexFavorites
 * @return { React.FunctionComponent }
 */
export default function PokedexFavorites(props) {
  const favoritePokemons = useSelector((state) => state.favoritePokemons)

  return (
    <div id="pokedex_favorites_container">
      {favoritePokemons.favoritePokemons.length === 0 ? (
        <>
          Nenhum pokemon favorito adicionado.. Busque um pokemon e adicione-lo
          aos seus favoritos!
        </>
      ) : (
        favoritePokemons.favoritePokemons.map((favoritePokemon) => {
          return (
            <PokemonCard
              pokemon={favoritePokemon}
              key={favoritePokemon.id}
              isFavorite={true}
            />
          )
        })
      )}
    </div>
  )
}
