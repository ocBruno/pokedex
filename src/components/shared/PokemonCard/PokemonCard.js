import './PokemonCard.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

/**
 * @export function PokemonCard
 * @return { React.FunctionComponent }
 */
export default function PokemonCard(props) {
  console.log(props)
  return (
    <section className="pokemon-card" id={props.pokemon.name}>
      <div className="pokemon-name">{props.pokemon.name}</div>
      <img
        className="pokemon-sprite-front"
        src={props.pokemon.sprites.front_default}
      />
      <div className="pokemon-card-abilities">
        <div className="pokemon-card-abilities-header">Abilities</div>
        {props.pokemon.abilities.map((ability, index) => (
          <div key={ability.ability.name} className="pokemon-card-ability-name">
            {index + 1}. {ability.ability.name}
          </div>
        ))}
      </div>
      <button
        className="add-to-favorites-btn btn btn-outline-dark mt-3 ml-1"
        type="button"
        onClick={(event) => handleAddPokemonToFavorites}
      >
        Adicionar aos favoritos
      </button>
    </section>
  )
}
