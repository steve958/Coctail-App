import React, { useEffect, useState } from 'react'
import './Shots.css'
import DogShake from './DogShake'
import Header from './Header'
import SingleCoctail from './SingleCoctail'

const Shots = () => {
  const [data, setData] = useState(null)
  const [singleCoctail, setSingleCoctail] = useState(null)
  useEffect(() => {
    if (data === null) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot')
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
        class="shots-header"
        headline="Coctails with shots"
      />
      <div id="shots-container">
        {data && !singleCoctail ? (
          data.map((shot) => {
            return (
              <div
                key={shot.idDrink}
                id="shot-card"
                onClick={() => singleCoctailClicked(shot.strDrink)}
              >
                <h1>{shot.strDrink}</h1>
                <img src={shot.strDrinkThumb} alt="" id="shot-card-img" />
              </div>
            )
          })
        ) : singleCoctail ? (
          <SingleCoctail singleCoctail={singleCoctail} class="shots" />
        ) : (
          <DogShake />
        )}
      </div>
    </>
  )
}

export default Shots
