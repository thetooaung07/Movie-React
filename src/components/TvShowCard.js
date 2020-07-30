import React, { useState, useContext } from "react";
import "../assets/css/TvShowCard.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const TvShowCard = ({ tvShow }) => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    addTvShowToWatchlist,
    tvShowWatchlist,
    addTvShowToFavourite,
    tvShowFavourite,
  } = useContext(GlobalContext);

  let localTvShow = tvShowWatchlist.find((obj) => obj.id === tvShow.id)
    ? true
    : false;
  let localFavTvShow = tvShowFavourite.find((obj) => obj.id === tvShow.id)
    ? true
    : false;

  return (
    <>
      {tvShow && tvShow.poster_path && (
        <div className=" TvShowCard  round-border m-2 mb-3">
          <div
            className="posRelative mb-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              className="round-border img-wh"
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={`${tvShow.name} Poster`}
            />
            {isHovering && (
              <div className="card-hover opac1">
                <div className="title-rd-hover btnHover-parent">
                  <Link to={`/tvShow/${tvShow.id}`}>
                    <button className="btn btn-outline-primary btn-sm mt-3 btnHover">
                      View Details
                    </button>
                  </Link>
                  {localTvShow ? (
                    <button
                      disabled={localTvShow}
                      className="btn btn-secondary btn-sm btnHover"
                      onClick={() => addTvShowToWatchlist(tvShow)}
                    >
                      View in Watchlist
                    </button>
                  ) : (
                    <button
                      disabled={localTvShow}
                      className="btn btn-outline-success btn-sm btnHover"
                      onClick={() => addTvShowToWatchlist(tvShow)}
                    >
                      Add to Watchlist
                    </button>
                  )}
                  {localFavTvShow ?<button
                  disabled={localFavTvShow}
                    className="btn btn-secondary btn-sm btnHover"
                    onClick={() => addTvShowToFavourite(tvShow)}
                  >
                    Added to Favourite
                  </button> : <button
                  
                  className="btn btn-outline-danger btn-sm btnHover"
                  onClick={() => addTvShowToFavourite(tvShow)}
                >
                  Add to Favourite
                </button>}
                  
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TvShowCard;
