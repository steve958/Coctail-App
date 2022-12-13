import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Beers from './components/Beers'
import Coctails from './components/Coctails'
import SearchBeers from './components/SearchBeers'
import SearchCoctails from './components/SearchCoctails'
import SearchShots from './components/SearchShots'
import Shots from './components/Shots'
import Ingredients from './components/Ingredients'
import SearchIngredients from './components/SearchIngredients'

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">

      <Routes>
        <Route
          path="/coctails"
          element={
            <Coctails
            />
          }
        ></Route>
        <Route
          path="/beers"
          element={
            <Beers

            />
          }
        ></Route>
        <Route
          path="/shots"
          element={
            <Shots

            />
          }
        ></Route>
        <Route
          path="/ingredients"
          element={
            <Ingredients
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <div id="app-wrapper">
              <span onClick={() => navigate('/beers')}>
                <SearchBeers />
              </span>
              <span onClick={() => navigate('/coctails')} className='coctails'>
                <SearchCoctails />
              </span>
              <span onClick={() => navigate('/shots')}>
                <SearchShots />
              </span>
              <span onClick={() => navigate('/ingredients')} className='ingredients'>
                <SearchIngredients />
              </span>
              <div className="bubbles">
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
                <img src="https://freesvg.org/img/Bubble.png" alt="" />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
