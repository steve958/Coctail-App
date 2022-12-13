import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined'

const Header = (props) => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [data, setData] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((data) => {
        setData(data.drinks)
        console.log(data)
      })
  }, [])

  return (
    <>
      <div id="header-container" className={props.class}>
        <span onClick={() => navigate('/')}>
          <HomeOutlinedIcon />
        </span>

        <input
          type="text"
          placeholder={`search ${props.headline.toLowerCase()}`}
        />
        <h2>{props.headline}</h2>
        {props.headline === "Search coctails by ingredients" && <span>
          {menuClicked ? (
            <span
              onClick={(e) => {
                e.stopPropagation()
                setMenuClicked(false)
              }}
            >
              <MenuOpenOutlinedIcon />
            </span>
          ) : (
            <span
              className="menu-span"
              onClick={() => {
                setMenuClicked(true)
              }}
            >
              <ListOutlinedIcon />
            </span>
          )}
        </span>}
      </div>
      {props.headline === "Search coctails by ingredients" && <div
        className={
          menuClicked
            ? `header-sidebar opened ${props.class} visible`
            : 'header-sidebar'
        }
      >
        {data && (
          <>
            <h2>Pick the ingrediants</h2>
            <div>
              {data.map((ing) => {
                return (
                  <div className="ingredient-wrapper">
                    <input type="checkbox" value={ing.strIngredient1} onChange={() => props.setIngredientsArray(oldState => oldState.includes(ing.strIngredient1) ? oldState.filter(ingredient => ingredient !== ing.strIngredient1) : [...oldState, ing.strIngredient1])} />
                    <p>{ing.strIngredient1}</p>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>}
    </>
  )
}

export default Header
