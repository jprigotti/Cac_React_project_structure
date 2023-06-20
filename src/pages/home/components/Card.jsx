import React from 'react'
import "./Card.css"

const Card = ({ movie }) => {
    return (
        <div className='card-container'>
            <img src={movie.backdrop}></img>
            <p>{movie.title}</p>
            <p>{movie.releaseDate}</p>
        </div>
    )
}

export default Card
