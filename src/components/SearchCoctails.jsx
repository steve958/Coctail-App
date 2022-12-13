import React, { useState } from 'react'
import './SearchCoctails.css'

const SearchCoctails = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  return (
    <div
      id="search-coctails-container"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {mouseEnter ? (
        <img
          src="https://www.hotelmanagementtips.com/wp-content/uploads/2021/11/exotic-cocktail-names-with-recipes.webp"
          id="coctails-hover"
        ></img>
      ) : (
        <div id="headline-wrapper">
          <h4>CLASSIC</h4>
          <h1>COCTAILS</h1>
        </div>
      )}
    </div>
  )
}

export default SearchCoctails
