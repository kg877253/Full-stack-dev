import React, { useContext } from 'react'
import Comp from './Comp'
import { countcon } from '../Context/context'

const Button = () => {
    const value = useContext(countcon)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}>Counter times --<Comp /></button>
        </div>
    )
}

export default Button
