import React, { useEffect, useState } from 'react'
import './Ingredients.css'
import DogShake from './DogShake'
import Header from './Header'
import SingleCoctail from './SingleCoctail'

const Ingredients = () => {
    const [data, setData] = useState([])
    const [singleCoctail, setSingleCoctail] = useState(null)
    const [ingrediantsArray, setIngredientsArray] = useState([])

    useEffect(() => {
        console.log(ingrediantsArray);
    }, [ingrediantsArray])

    useEffect(() => { console.log(data) }, [data])

    function combineData(newData) {

        if (data.length === 0) {
            setData(newData)
        } else {
            const newArr = newData.filter(coctail => {
                if (data.find(obj => obj.idDrink === coctail.idDrink)) {
                    return true
                } return false
            })
            setData(newArr)
        }
    }

    useEffect(() => {
        if (ingrediantsArray.length > 0) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediantsArray[ingrediantsArray.length - 1]}`).then(res => res.json()).then(data => combineData(data.drinks))
        } else {
            setData([])
        }
    }, [ingrediantsArray])


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
                class="ingredients-header"
                headline="Search coctails by ingredients"
                setIngredientsArray={setIngredientsArray}
            />
            <div id="ingredients-container">
                {data.length > 0 && !singleCoctail ? (
                    data.map((coctail) => {
                        return (
                            <div
                                key={coctail.idDrink}
                                id="ingredients-card"
                                onClick={() => singleCoctailClicked(coctail.strDrink)}
                            >
                                <h1
                                    id="ingredient-name"
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
                                <img src={coctail.strDrinkThumb} alt="" id="ingredients-card-img" />
                            </div>
                        )
                    })
                ) : singleCoctail ? (
                    <SingleCoctail singleCoctail={singleCoctail} class="beers" />
                ) : (<>
                    <h2 className='default-text'>-- open sidebar and choose ingredients --</h2>
                    <DogShake />
                </>
                )}
            </div>
        </>
    )
}

export default Ingredients
