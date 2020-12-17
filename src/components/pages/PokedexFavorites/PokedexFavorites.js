import './PokedexFavorites.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

/**
 * @export function PokedexFavorites
 * @return { React.FunctionComponent }
 */
export default function PokedexFavorites(props) {
  /**
   * handlePageReturn
   * gos back the active history object
   * @param {Event} event
   */
  const handlePageReturn = (event) => {
    event.preventDefault()
    props.history.goBack()
  }

  return (
    <nav>
      <ul>
        <li>
          <Link onClick={handlePageReturn}>Voltar</Link>
        </li>
      </ul>
    </nav>
  )
}
