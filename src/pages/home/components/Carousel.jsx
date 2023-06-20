import React, { useEffect } from 'react'
import Card from './Card';
import "./Carousel.css";

const Carousel = ({ movies }) => {

    return (
        <div className='carousel-container'>
            {movies != null &&
                movies.map((movie, index) => {
                    return (
                        <Card key={index} movie={movie} />
                    )
                })}
        </div>
    )
}

export default Carousel
