import React, { useState, useEffect } from 'react'
import "./Banner.css"
import useSWR from "swr"
import { getMovieVideos } from "../../../services/tmdb.services"
import Modal from '../../../components/modal/modal'
import { FaPlay } from "react-icons/fa";


const Banner = ({ movie }) => {
    // console.log("banner movie: ", movie);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieURL, setMovieURL] = useState('');

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const onCloseModal = () => {
        setIsModalOpen(false);
    }

    const { data: movieVideo, isLoading: movieVideoIsLoading } = useSWR(
        "getMovieVideo" + movie?.id,
        () => getMovieVideos(movie?.id)
    );


    useEffect(() => {

        // const isLoading = movieVideoIsLoading && !youtubeVideo;
        // const hasError = !movieVideoIsLoading && !youtubeVideo;
        const hasData = !movieVideoIsLoading && movieVideo;

        if (hasData) {
            const youtubeUrl = "https://www.youtube.com/embed/";
            const youtubeID = movieVideo?.results[0]?.key;
            setMovieURL(`${youtubeUrl}${youtubeID}`);
        }

    }, [
        movieVideo,
        movieVideoIsLoading,
    ]);



    const handleMovieVideo = () => {

    }

    return (
        <div
            className='banner-container'
            style={{
                backgroundImage: `url(${movie?.backdrop})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "50vh"
            }}>

            <div className="banner-lower-container">
                <div className="banner-info-container">
                    <p className='title mb-1'>{movie?.title}</p>
                    <p className='rating'>Rating: {movie?.rating}</p>
                    <p className='releaseDate'>Release Date: {movie?.releaseDate}</p>
                </div>
                <div className="banner-action-container">
                    <button
                        className="btn-play"
                        onClick={openModal}>
                        <FaPlay /></button>
                </div>
            </div>
            <Modal movieURL={movieURL} isModalOpen={isModalOpen} onCloseModal={onCloseModal} />

        </div>
    )
}

export default Banner




{/* <BannerImage movie={movie}
style={{
    backgroundImage: `url(${movie?.backdrop})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} /> */}