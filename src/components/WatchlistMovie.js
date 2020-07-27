import React, { useState, useContext } from "react";
import "../assets/css/WatchlistMovie.css";
import { GlobalContext } from "../Context/GlobalState";

export const WatchlistMovie = ({ movie }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { removeMovieFromWatchlist } = useContext(GlobalContext);



  return (
    <div
      className="WatchlistMovie MovieCard m-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        className=""
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      {isHovering && 
        <div className="movie-card-hover">
          <div className="w2-hover">
            <button 
              className="btn btn-sm text-light btnHover"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <i className="fa fa-eye-slash"></i>
            </button>
          </div>

          <div className="title-rd-hover">
            {movie.title}
            {movie.release_date && (
              <div className="">{movie.release_date.substring(0, 4)}</div>
            )}
          </div>
        </div>
      }
    </div>
  );
};
