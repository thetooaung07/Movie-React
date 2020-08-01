import React, { useContext } from "react";
import "../assets/css/FavouriteMovie.css";
// import { GenreMovie } from "./GenreMovie";
import { GlobalContext } from "../Context/GlobalState";

export const FavouriteMovie = ({ movieFavourite }) => {
  const { removeMovieFromFavourite } = useContext(GlobalContext);

  return (
    <div className="FavouriteMovie m-2 mb-3 round-border">
      <img
        className="round-border img-wh"
        src={`https://image.tmdb.org/t/p/w200${movieFavourite.poster_path}`}
        alt={movieFavourite.title}
      />

      <div className="d-flex flex-column">
        <h6 className="titleEditor">{movieFavourite.title}</h6>
      </div>
      {/* <button
        className="btn btn-sm remove-fav"
        onClick={() => removeMovieFromFavourite(movieFavourite.id)}
      >
        <i className="fa fa-times"></i>
      </button> */}
    </div>
  );
};
