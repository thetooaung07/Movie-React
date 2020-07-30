import React, { useContext } from "react";
import "../assets/css/Favourite.css";
import { GlobalContext } from "../Context/GlobalState";
import { FavouriteMovie } from "./FavouriteMovie";
import { FavouriteTvShow } from "./FavouriteTvShow";

export const Favourite = () => {
  const { movieFavourite, tvShowFavourite } = useContext(GlobalContext);

  return (
    <div className="Favourite mt-4 w-100">
      <h3 className="text-left">Favourites</h3>
      <hr className=" mb-5" />
      {movieFavourite && movieFavourite.length > 0 &&
      <div className="">
        <h5 className="text-left">Favourite Movies</h5>
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {movieFavourite && movieFavourite.length > 0 ? (
            movieFavourite.map((movieFavourite) => (
              <FavouriteMovie
                key={movieFavourite.id}
                movieFavourite={movieFavourite}
              />
            ))
          ) : (
            <h3 className="text-secondary">No Movies</h3>
          )}
        </div>
      </div> }

      {tvShowFavourite && tvShowFavourite.length > 0 && (
        <div className="">
          <h5 className="text-left">Favourite TV-Shows</h5>
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            {tvShowFavourite && tvShowFavourite.length > 0 ? (
              tvShowFavourite.map((tvShowFavourite) => (
                <FavouriteTvShow
                  key={tvShowFavourite.id}
                  tvShowFavourite={tvShowFavourite}
                />
              ))
            ) : (
              <h3 className="text-secondary">No TV Shows</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
