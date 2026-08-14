import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2VAKb-ju088wxKToxQ3ONysuWGENhmo-S8QBkR5Akg&s=10" alt="" width={333} height={200}
            style={{border: "2px solid black"}} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
