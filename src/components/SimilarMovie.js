import React, { useState, useEffect } from "react";
import Axios from "axios";


export const SimilarMovie = () => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      const resArr = res.data.results.slice(0, 5);
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
    <div className="PopularMovie d-flex ">
      {similarMovies.map((movie) => (
        <div className="FavouriteMovie m-2 mb-3 ">
          <div className="posRelative">
            <img
              className="img-wh round-border "
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="d-flex flex-column">
            <h6 className="titleEditor">{movie.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
