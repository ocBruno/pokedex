import './PokedexFooter.css'
import React from 'react'

/**
 * @export function PokedexFooter
 * @return { React.FunctionComponent }
 */
export default function PokedexFooter() {
  return (
    <footer id="app_footer" className="footer">
      <div className="container">
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/roundicons-freebies"
            title="Roundicons Freebies"
          >
            Roundicons Freebies
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  )
}
