import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){

    const navigate = useNavigate()

    function handleClick(){
        navigate('/user-form')
    }

    return (
        <button onClick={handleClick}>Go To Form</button>
    )
}

export default Home