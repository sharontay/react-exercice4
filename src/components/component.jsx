import React, { useState } from 'react'
import '../styles/component.css'

const Component = () => {

    const initialColor = {
        red: 0,
        green: 0,
        blue: 0
    }

    const [colorState, setColorState] = useState(initialColor);
    const [colorInterval, setColorInterval] = useState(0);

    const color = {
        backgroundColor: `rgb(${colorState.red}, ${colorState.green}, ${colorState.blue})`
    }

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const changeColor = () => {
        const tempColor = {
            red: getRandomNumber(0, 255),
            green: getRandomNumber(0, 255),
            blue: getRandomNumber(0, 255)
        }

        setColorState(tempColor)
    }

    const startColorInterval = () => {
        const newColorInterval = setInterval(changeColor, 500)
        setColorInterval(newColorInterval)
    }

    const stopColorInterval = () => {
        if(colorInterval) {
            clearInterval(colorInterval)
            setColorInterval(0)
        }
    }

    return (
        <div
            className='square'
            style={ color }
            onMouseOver={ startColorInterval }
            onMouseLeave={ stopColorInterval }
            onDoubleClick= { stopColorInterval }
        >

        </div>
    )
}

export default Component
