import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movieWatchlist: localStorage.getItem("movieWatchlist")
    ? JSON.parse(localStorage.getItem("movieWatchlist"))
    : [],
  tvShowWatchlist: localStorage.getItem("tvShowWatchlist")
    ? JSON.parse(localStorage.getItem("tvShowWatchlist"))
    : [],
  movieFavourite: localStorage.getItem("movieFavourite")
    ? JSON.parse(localStorage.getItem("movieFavourite"))
    : [],
  tvShowFavourite: localStorage.getItem("tvShowFavourite")
    ? JSON.parse(localStorage.getItem("tvShowFavourite"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "movieWatchlist",
      JSON.stringify(state.movieWatchlist)
    );
    localStorage.setItem(
      "tvShowWatchlist",
      JSON.stringify(state.tvShowWatchlist)
    );
    localStorage.setItem(
      "movieFavourite",
      JSON.stringify(state.movieFavourite)
    );
    localStorage.setItem(
      "tvShowFavourite",
      JSON.stringify(state.tvShowFavourite)
    );
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addTvShowToWatchlist = (tvShow) => {
    dispatch({ type: "ADD_TVSHOW_TO_WATCHLIST", payload: tvShow });
  };
  const removeTvShowFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_TVSHOW_FROM_WATCHLIST", payload: id });
  };
  const addMovieToFavourite = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITE", payload: movie });
  };
  const removeMovieFromFavourite = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_FAVOURITE", payload: id });
  };
  const addTvShowToFavourite = (tvShow) => {
    dispatch({ type: "ADD_TVSHOW_TO_FAVOURITE", payload: tvShow });
  };
  const removeTvShowFromFavourite = (id) => {
    dispatch({ type: "REMOVE_TVSHOW_FROM_FAVOURITE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        movieWatchlist: state.movieWatchlist,
        tvShowWatchlist: state.tvShowWatchlist,
        movieFavourite: state.movieFavourite,
        tvShowFavourite: state.tvShowFavourite,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addTvShowToWatchlist,
        removeTvShowFromWatchlist,
        addMovieToFavourite,
        removeMovieFromFavourite,
        addTvShowToFavourite,
        removeTvShowFromFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
