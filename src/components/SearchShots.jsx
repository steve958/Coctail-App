import React, { useState } from 'react'
import './SearchCoctails.css'

const SearchShots = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <div
      id="search-coctails-container"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {mouseEnter ? (
        <img
          src="https://cf.ltkcdn.net/cocktails/images/orig/270631-1600x1066-fruity-shot-recipes-that-taste-like-good-time.jpg"
          id="shots-hover"
        ></img>
      ) : (
        <div id="headline-wrapper">
          <h1>COCTAILS</h1>
          <p>with</p>
          <h4>SHOTS</h4>
        </div>
      )}
    </div>
  )
}

export default SearchShots
