import React, { useContext } from "react";

import "../assets/css/Watchlist.css";
import { GlobalContext } from "../Context/GlobalState";
import { WatchlistMovie } from "./WatchlistMovie";

export const Watchlist = () => {
  const { movieWatchlist } = useContext(GlobalContext);
  console.log(movieWatchlist);

  return (
    <div className="Watchlist">
      <h3>Watchlist</h3>
      <div className="">
        <p> Movies</p>
        <div className="MovieCard-container">
          {movieWatchlist.map((movie) => (
            <WatchlistMovie key={movie.id} movie={movie}></WatchlistMovie>
          ))}
        </div>
      </div>
    </div>
  );
};
