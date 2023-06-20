import React from 'react'
import "./Banner.css"

const Banner = ({ imageURL }) => {
    console.log(imageURL);
    return (
        <div className='banner-container'>
            <img src={imageURL?.backdrop} alt="Banner Image" />

        </div>
    )
}

export default Banner
