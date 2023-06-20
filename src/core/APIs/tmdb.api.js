import axios from "axios"

//setup the URL base and API_KEY
export const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f56c508bc646d8d3f170463a64334059",
        language: "es-ES"
    }
});

//Setup the paths for the endpoints
export const tmdb_paths = {
    movies: {
      popular: "/movie/popular",
      topRated: "/movie/top_rated",
      upcoming: "/movie/upcoming",
      nowPlaying: "/movie/now_playing",
      details: (id) => `/movie/${id}`,
      videos: (id) => `/movie/${id}/videos`,
      recommendations: (id) => `/movie/${id}/recommendations`,
    },
    tv: {
      popular: "/tv/popular",
      topRated: "/tv/top_rated",
      onTheAir: "/tv/on_the_air",
      airingToday: "/tv/airing_today",
      details: (id) => `/tv/${id}`,
      videos: (id) => `/tv/${id}/videos`,
      recommendations: (id) => `/tv/${id}/recommendations`,
    },
    trending: {
      all: "/trending/all/day",
      movies: "/trending/movie/day",
      tv: "/trending/tv/day",
    },
    images: {
      url: "https://image.tmdb.org/t/p",
      sizes: {
        small: "/w300",
        medium: "/w500",
        large: "/w1280",
        original: "/original",
      },
      poster: (path, size = "large") => {
        return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
      },
      backdrop: (path, size = "large") => {
        return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
      },
    },
  };
  