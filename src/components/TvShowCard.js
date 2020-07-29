import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const TvShowCard = ({ tvShow }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { addTvShowToWatchlist, tvShowWatchlist } = useContext(GlobalContext);

  let localTvShow = tvShowWatchlist.find((obj) => obj.id === tvShow.id);
  let btnTvShwoDisabled = localTvShow ? true : false;

  return (
    <>
      {tvShow && tvShow.poster_path && (
        <div className=" TvShowCard MovieCard m-2 mb-3">
          <div
            className="posRelative mb-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              className="round-border"
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={`${tvShow.name} Poster`}
            />
            {isHovering && (
              <Link to={`/tvShow/${tvShow.id}`}>
                <div className="card-hover">
                  <div className="title-rd-hover">
                    {tvShow.name}
                    {tvShow.first_air_date && (
                      <div className="">
                        {tvShow.first_air_date.substring(0, 4)}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="">
            <button
              disabled={btnTvShwoDisabled}
              className="btn btn-success btn-sm "
              onClick={() => addTvShowToWatchlist(tvShow)}
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TvShowCard;
