import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHome, selectHome } from '../slices/home'
import Logo from './Logo'

function App() {
  const homes = useSelector(selectHome)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchHome())
  }, [])

  return (
    <>
      <div className="app">
        <Logo />
        <h1>The Creatives Hub</h1>
        <img src="../images/Level.png" alt="logo"></img>
        <ul>
          {homes.map((home) => (
            <li key={home}>{home}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
