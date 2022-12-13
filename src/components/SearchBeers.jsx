import React, { useState } from 'react'
import './SearchCoctails.css'

const SearchBeers = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <div
      id="search-coctails-container"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {mouseEnter ? (
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-friends-toasting-beer-bottles-at-night-royalty-free-image-1570735329.jpg"
          id="beers-hover"
        ></img>
      ) : (
        <div id="headline-wrapper">
          <h1>COCTAILS</h1>
          <p>with</p>
          <h4>BEERS</h4>
        </div>
      )}
    </div>
  )
}

export default SearchBeers
