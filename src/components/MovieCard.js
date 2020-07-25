import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="MovieCard d-flex">
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      )}
      <div className="d-flex flex-column">{movie.title}
      {
        movie.release_date && (
          <div>{movie.release_date.substring()}</div>
        )
      }
      </div>
    </div>
  );
};
