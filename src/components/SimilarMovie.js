import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FavouriteMovie } from "./FavouriteMovie";

export const SimilarMovie = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  
  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      const resArr = res.data.results.slice(0,5);
      setSimilarMovies(resArr);
      console.log(resArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="PopularMovie d-flex rounded">
      {
        similarMovies.map((movie)=> (
          <FavouriteMovie key={movie.id} movieFavourite={movie}/>
        ))
      }
      
    </div>
  );
};
