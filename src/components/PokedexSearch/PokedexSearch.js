import './PokedexSearch.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

/**
 * @export function PokedexSearch
 * @return { React.FunctionComponent }
 */
export default function PokedexSearch() {
  return (
    <div>
      <form className="form-inline mt-2 mt-md-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
