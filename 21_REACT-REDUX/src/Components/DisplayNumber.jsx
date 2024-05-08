import React from 'react'
import { useSelector } from 'react-redux'

const DisplayNumber = () => {
    const number = useSelector(state => state.number)
    console.log("Number is:", number)
    return (
        <div>Number : {number} </div>
    )
}

export default DisplayNumber