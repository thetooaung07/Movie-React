import React, { useContext } from "react";

import "../assets/css/Watchlist.css";
import { GlobalContext } from "../Context/GlobalState";
import { WatchlistMovie } from "./WatchlistMovie";

export const Watchlist = () => {
  const { movieWatchlist } = useContext(GlobalContext);

  return (
    <div className="Watchlist w-100">
      <h3 className="text-left mt-4">Watchlist</h3>
      
      <hr className="" />
      {movieWatchlist && movieWatchlist.length > 0 ? (
        <div className="mt-2">
          <h4 className="text-secondary text-left"> Movies </h4>
          <div className="MovieCard-container">
            {movieWatchlist.map((movie) => (
              <WatchlistMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <h3 className="text-secondary mt-5">Currently No movies in Watchlist</h3>
      )}
    </div>
  );
};
