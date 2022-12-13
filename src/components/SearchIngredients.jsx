import React, { useState } from 'react'
import './SearchCoctails.css'

const SearchIngredients = () => {
    const [mouseEnter, setMouseEnter] = useState(false)
    return (
        <div
            id="search-coctails-container"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            {mouseEnter ? (
                <img
                    src="https://img.huffingtonpost.com/asset/5aeb48481e00002c008e45f7.jpeg?cache=Yf5N3kvmDh&ops=1778_1000"
                    id="ingredients-hover"
                    alt='kura'
                ></img>
            ) : (
                <div id="headline-wrapper">
                    <h4>Search</h4>
                    <p>by</p>
                    <h1>INGREDIENTS</h1>
                </div>
            )}
        </div>
    )
}

export default SearchIngredients
