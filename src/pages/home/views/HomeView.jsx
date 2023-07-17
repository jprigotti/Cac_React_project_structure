import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useSWR from 'swr';
import {
  getPopularMovies
} from "../../../services/tmdb.services";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import FormStyle1 from '../../../components/FormStyle1';

const HomeView = () => {
  const [banner, setBanner] = useState(null);

  const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
    "getPopularMovies",
    () => getPopularMovies()
  );

  useEffect(() => {
    const getRandomMovieOrSerie = () => {
      const random = Math.random() * 10;

      if (popularMoviesIsLoading) return;
      return popularMovies[Math.floor(Math.random() * popularMovies.length)];

    };

    const randomMovieOrSerie = getRandomMovieOrSerie();
    setBanner(randomMovieOrSerie);
  }, [
    popularMovies,
    popularMoviesIsLoading,
  ]);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <Banner movie={banner} />
      {!popularMoviesIsLoading &&
        <>
          <FormStyle1.h1
          className="my-2">Popular Movies</FormStyle1.h1>
          <Carousel movies={popularMovies}/> 
            </>

      }

    </div>
  );
};

export default HomeView;
