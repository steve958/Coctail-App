import React, { useEffect, useState } from 'react'
import './Beers.css'
import DogShake from './DogShake'
import Header from './Header'
import SingleCoctail from './SingleCoctail'

const Beers = () => {
  const [data, setData] = useState(null)
  const [singleCoctail, setSingleCoctail] = useState(null)
  useEffect(() => {
    if (data === null) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setTimeout(() => {
            setData(data.drinks)
          }, 3000)
        })
    }
  }, [])

  async function singleCoctailClicked(name) {
    // navigate(`/beers/single-drink=${name}`)
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSingleCoctail(data.drinks)
      })
  }

  return (
    <>
      <Header
        class="beers-header"
        headline="Coctails with beers"
      />
      <div id="beers-container">
        {data && !singleCoctail ? (
          data.map((beer) => {
            return (
              <div
                key={beer.idDrink}
                id="beer-card"
                onClick={() => {
                  singleCoctailClicked(beer.strDrink)
                }}
              >
                <h1>{beer.strDrink}</h1>
                <img src={beer.strDrinkThumb} alt="" id="beer-card-img" />
              </div>
            )
          })
        ) : singleCoctail ? (
          <SingleCoctail singleCoctail={singleCoctail} class="beers" />
        ) : (
          <DogShake />
        )}
      </div>
    </>
  )
}

export default Beers
