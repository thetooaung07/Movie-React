import React, { useState, useEffect } from "react";
import Axios from "axios";

export const SimilarMovie = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  console.log(id);
  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      setSimilarMovies(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
    {similarMovies.map((movie) => (<iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/watch?v=${similarMovies.key}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>))}
      
    </div>
  );
};
