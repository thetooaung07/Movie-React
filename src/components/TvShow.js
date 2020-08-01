import React, { useState, useEffect } from "react";
import "../assets/css/TvShow.css";
import Axios from "axios";
import TvShowCard from "./TvShowCard";

export const TvShow = () => {
  const [tvShows, setTvShows] = useState([]);
  const getTvShows = async () => {
    const res = await Axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    setTvShows(res.data.results);
    console.log("TVShow Api called");
    console.log(res.data.results);
  };
  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <div className="TvShow">
      <div className="wrapper">
        <h4 className="colorCustom">TV Shows</h4>
        <h5 className="text-left redColor">Airing Today</h5>

        <div className="TvShow-container">
          {tvShows &&
            tvShows.length > 0 &&
            tvShows.map((tvShow) => (
              <TvShowCard key={tvShow.id} tvShow={tvShow}></TvShowCard>
            ))}
        </div>
      </div>
    </div>
  );
};
