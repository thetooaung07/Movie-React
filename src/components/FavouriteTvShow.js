import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
// import { GenreShow } from "./GenreShow";

export const FavouriteTvShow = ({ tvShowFavourite }) => {
  const { removeTvShowFromFavourite } = useContext(GlobalContext);

  return (
    <div className="FavouriteTvShow m-2 round-border">
      <div className="posRelative">
        <img
          className="img-wh"
          src={`https://image.tmdb.org/t/p/w200${tvShowFavourite.poster_path}`}
          alt={`${tvShowFavourite.name} Poster`}
        />
        <button
          className="btn btn-sm remove-fav"
          onClick={() => removeTvShowFromFavourite(tvShowFavourite.id)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
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
