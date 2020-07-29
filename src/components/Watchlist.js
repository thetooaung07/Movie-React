import React, { useState, useContext } from "react";

import "../assets/css/Watchlist.css";
import { GlobalContext } from "../Context/GlobalState";
import { WatchlistMovie } from "./WatchlistMovie";
import { WatchlistShow } from "./WatchlistShow";

export const Watchlist = () => {
  const [isClicked, setIsClicked] = useState("movies");
  const { movieWatchlist, tvShowWatchlist } = useContext(GlobalContext);

  return (
    <div className="Watchlist w-100">
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="text-left">Watchlist</h3>
        {isClicked === "movies" ? (
          <div className="toggleMS mr-5">
            <button
              className=" btn-secondary btn1"
              onClick={() => setIsClicked("movies")}
            >
              Movies
            </button>
            <button
              className="btn-light btn2"
              onClick={() => setIsClicked("tvShows")}
            >
              Shows
            </button>
          </div>
        ) : (
          <div className="toggleMS mr-5">
            <button
              className=" btn-light btn1"
              onClick={() => setIsClicked("movies")}
            >
              Movies
            </button>
            <button
              className=" btn-secondary btn2"
              onClick={() => setIsClicked("tvShows")}
            >
              Shows
            </button>
          </div>
        )}
      </div>
      <hr className="" />

      {isClicked === "movies" && movieWatchlist && movieWatchlist.length > 0 ? (
        <div className="mt-2">
          <h4 className="text-secondary text-left"> Movies </h4>
          <div className="MovieCard-container">
            {movieWatchlist.map((movie) => (
              <WatchlistMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        isClicked === "movies" && (
          <h3 className="text-secondary mt-5">
            Currently No movies in Watchlist
          </h3>
        )
      )}
      {isClicked === "tvShows" &&
      tvShowWatchlist &&
      tvShowWatchlist.length > 0 ? (
        <div className="mt-2">
          <h4 className="text-secondary text-left"> TV Shows </h4>
          <div className="MovieCard-container">
            {tvShowWatchlist.map((tvShow) => (
              <WatchlistShow key={tvShow.id} tvShow={tvShow} />
            ))}
          </div>
        </div>
      ) : (
        isClicked === "tvShows" && (
          <h3 className="text-secondary mt-5">
            Currently No Shows in Watchlist
          </h3>
        )
      )}
    </div>
  );
};
