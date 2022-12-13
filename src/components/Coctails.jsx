import React, { useEffect, useState } from 'react'
import './Coctails.css'
import DogShake from './DogShake'
import Header from './Header'
import SingleCoctail from './SingleCoctail'

const Coctails = () => {
  const [data, setData] = useState(null)
  const [singleCoctail, setSingleCoctail] = useState(null)
  useEffect(() => {
    if (data === null) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
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
        class="coctails-header"
        headline="Classic coctails"
      />
      <div id="coctails-container">
        {data && !singleCoctail ? (
          data.map((coctail) => {
            return (
              <div
                key={coctail.idDrink}
                id="coctail-card"
                onClick={() => singleCoctailClicked(coctail.strDrink)}
              >
                <h1
                  id="cocatail-name"
                  title={coctail.strDrink.length > 25 ? coctail.strDrink : ''}
                >
                  {coctail.strDrink.length > 25
                    ? coctail.strDrink
                      .split(' ')
                      .slice(0, 3)
                      .join(' ')
                      .concat('...')
                    : coctail.strDrink}
                </h1>
                <img src={coctail.strDrinkThumb} alt="" id="coctail-card-img" />
              </div>
            )
          })
        ) : singleCoctail ? (
          <SingleCoctail singleCoctail={singleCoctail} class="coctails" />
        ) : (
          <DogShake />
        )}
      </div>
    </>
  )
}

export default Coctails
