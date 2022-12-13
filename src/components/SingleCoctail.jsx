import React from 'react'
import './SingleCoctail.css'

const SingleCoctail = (props) => {
  return (
    props.singleCoctail &&
    props.singleCoctail.map((drink) => {
      return (
        <div key={drink.idDrink} id="single-coctail">
          <h1
            className={
              props.class === 'coctails'
                ? props.class
                : props.class === 'shots'
                ? props.class
                : 'beers'
            }
          >
            {drink.strDrink}
          </h1>
          <img src={drink.strDrinkThumb} alt="" />
          <h2
            className={
              props.class === 'coctails'
                ? props.class
                : props.class === 'shots'
                ? props.class
                : 'beers'
            }
          >
            GLASS:
          </h2>
          <h3
            className={
              props.class === 'coctails'
                ? props.class
                : props.class === 'shots'
                ? props.class
                : 'beers'
            }
          >
            {drink.strGlass}
          </h3>
          <h2
            className={
              props.class === 'coctails'
                ? props.class
                : props.class === 'shots'
                ? props.class
                : 'beers'
            }
          >
            INGREDIANTS:
          </h2>
          {drink.strIngredient1 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient1} {drink.strMeasure1}
            </h3>
          )}
          {drink.strIngredient2 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient2} {drink.strMeasure2}
            </h3>
          )}
          {drink.strIngredient3 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient3} {drink.strMeasure3}
            </h3>
          )}
          {drink.strIngredient4 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient4} {drink.strMeasure4}
            </h3>
          )}
          {drink.strIngredient5 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient5} {drink.strMeasure5}
            </h3>
          )}
          {drink.strIngredient6 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient6} {drink.strMeasure6}
            </h3>
          )}
          {drink.strIngredient7 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient7} {drink.strMeasure7}
            </h3>
          )}
          {drink.strIngredient8 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient8} {drink.strMeasure8}
            </h3>
          )}
          {drink.strIngredient9 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient9} {drink.strMeasure9}
            </h3>
          )}
          {drink.strIngredient10 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient10} {drink.strMeasure10}
            </h3>
          )}
          {drink.strIngredient11 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient11} {drink.strMeasure11}
            </h3>
          )}
          {drink.strIngredient12 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient12} {drink.strMeasure12}
            </h3>
          )}
          {drink.strIngredient13 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient13} {drink.strMeasure13}
            </h3>
          )}
          {drink.strIngredient14 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient14} {drink.strMeasure14}
            </h3>
          )}
          {drink.strIngredient15 && (
            <h3
              className={
                props.class === 'coctails'
                  ? props.class
                  : props.class === 'shots'
                  ? props.class
                  : 'beers'
              }
            >
              {drink.strIngredient15} {drink.strMeasure15}
            </h3>
          )}
          <p className={props.class}>INSTRUCTIONS: {drink.strInstructions}</p>
        </div>
      )
    })
  )
}

export default SingleCoctail
