import React from 'react'
import Header from '../components/Header'
import { Helmet } from "react-helmet-async";
import "./LandingView.css"
import Hero from "../components/Hero"

const LandingView = () => {
    return (
        <div className="outer-container-wallpaper">
            <div className='main-container'>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
                </Helmet>
                <Header />
                <Hero />
            </div>
        </div>



    )
}

export default LandingView
