import React, { useState, useContext } from "react";
import "../assets/css/MovieCard.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

export const MovieCard = ({ movie }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { movieWatchlist, addMovieToWatchlist } = useContext(GlobalContext);

  let localMovie = movieWatchlist.find((obj) => obj.id === movie.id);
  const btnMovieDisabled = localMovie ? true : false;

  return (
    <>
      {movie && movie.poster_path && (
        <div
          className="MovieCard m-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="posRelative">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            {isHovering && (
              <Link to={`/movie/${movie.id}`}>
                <div className="card-hover">
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

          <div className="">
            <button
              disabled={btnMovieDisabled}
              className="btn btn-sm"
              onClick={(event) => {
                event.stopPropagation();
                addMovieToWatchlist(movie);
              }}
            >
              Click Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

{
  /* <div className="w2-hover">
              <button
                disabled={btnMovieDisabled}
                className="btn btn-sm text-light btnHover"
                onClick={(event) => {
                  event.stopPropagation();
                  addMovieToWatchlist(movie);
                }}
              >
                <i className="fa fa-eye"></i>
              </button>
            </div> */
}
