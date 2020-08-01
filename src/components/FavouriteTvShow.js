import React from "react";
// import { GenreShow } from "./GenreShow";

export const FavouriteTvShow = ({ tvShowFavourite }) => {
  return (
    <div className="FavouriteTvShow m-2 round-border">
      <img
        className="round-border img-wh"
        src={`https://image.tmdb.org/t/p/w200${tvShowFavourite.poster_path}`}
        alt={`${tvShowFavourite.name} Poster`}
      />
      <div>
        <h6 className="titleEditor">{tvShowFavourite.name}</h6>
        {/* <div className="d-flex align-items-center" >
          {tvShowFavourite.genre_ids.map((id) => (
            <GenreShow key={id} id={id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};
