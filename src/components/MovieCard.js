import React, { useState, useContext } from "react";
import "../assets/css/MovieCard.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

export const MovieCard = ({ movie }) => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    movieWatchlist,
    addMovieToWatchlist,
    addMovieToFavourite,
    movieFavourite,
    removeMovieFromFavourite,
  } = useContext(GlobalContext);

  const localMovie = movieWatchlist.find((obj) => obj.id === movie.id)
    ? true
    : false;

  const localFavMovie = movieFavourite.find((obj) => obj.id === movie.id)
    ? true
    : false;

  return (
    <>
      {movie && movie.poster_path && (
        <div className="MovieCard m-2 mb-3">
          <div
            className="posRelative "
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            {isHovering && (
              <Link to={`/movie/${movie.id}`}>
                <div className="card-hover rounded-0">
                  <div className="title-rd-hover">
                    {movie.title}
                    {movie.release_date && (
                      <div className="">
                        {movie.release_date.substring(0, 4)}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className="d-flex align-items-center editBtn">
          
            <button
              disabled={localMovie}
              className="btn btn-info btn-sm flex-grow-1 rounded-0 editBtn1"
              onClick={() => {
                addMovieToWatchlist(movie);
              }}
            >
              {localMovie ? "Added to Watchlist" : "Add to Watchlist"}
            </button>

            {!localFavMovie ? (
              <button
                className="btn btn-info btn-sm rounded-0 editBtn2"
                onClick={() => addMovieToFavourite(movie)}
              >
                <i className="fa fa-heart-o"></i>
              </button>
            ) : (
              <button
                className="btn btn-info btn-sm rounded-0 editBtn2"
                onClick={() => removeMovieFromFavourite(movie.id)}
              >
                <i className="fa fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
