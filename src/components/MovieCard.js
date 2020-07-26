import React, { useState } from "react";
import "../assets/css/MovieCard.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, tvShow, type }) => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovering(true);
  };

  return (
    <>


      {type === "movie" && movie && movie.poster_path && (
        <div
          className="MovieCard m-2"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link to={`/${movie.id}`}>
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          </Link>

          {type === "movie" && isHovering && (
            <div className="movie-card-hover">
              {movie.title}
              {movie.release_date && (
                <div className="">{movie.release_date.substring(0, 4)}</div>
              )}
            </div>
          )}
        </div>
      )}

      {type === "TvShow" && tvShow && tvShow.poster_path && (
        <div
          className="MovieCard m-2"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link to={`/${tvShow.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={`${tvShow.name} Poster`}
            />
          </Link>

          {type === "TvShow" && isHovering && (
            <div className="movie-card-hover">
              {tvShow.name}
              {tvShow.first_air_date && (
                <div className="">{tvShow.first_air_date}</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
