import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const Navigation = useNavigate()

    const handleClick = () => {
        Navigation('/form')
    }
  return (
    <>
    <button onClick={handleClick}>Start Fun</button>
    </>
  )
}

export default Home
