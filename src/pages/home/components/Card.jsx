import React, { useState } from 'react'
import "./Card.css"

const Card = ({ movie }) => {
    const [showCardFooter, setShowCardFooter] = useState(true);
    const handleMouseEnter = () => {
        setShowCardFooter(true);
    }
    const handleMouseLeave = () => {
        setShowCardFooter(false);
    }

    return (
        <div
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            className='card-container'
            style={{
                backgroundImage: `url(${movie.backdrop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

            {showCardFooter &&
                (<div className="card-footer">
                    <p>{movie.title}</p>
                    <p>{movie.releaseDate}</p>
                </div>)}

        </div>
    )
}

export default Card
