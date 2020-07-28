import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movieWatchlist: localStorage.getItem("movieWatchlist")
    ? JSON.parse(localStorage.getItem("movieWatchlist"))
    : [],
  tvShowWatchlist: localStorage.getItem("tvShowWatchlist")
    ? JSON.parse(localStorage.getItem("tvShowWatchlist"))
    : [],
  favourite: localStorage.getItem("favourite")
    ? JSON.parse(localStorage.getItem("favourite"))
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
    localStorage.setItem("favourite", JSON.stringify(state.favourite));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const addTvShowToWatchlist = (movie) => {
    dispatch({ type: "ADD_TVSHOW_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addMovieToFavourite = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITE", payload: movie });
  };
  const removeMovieFromFavourite = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_FAVOURITE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        movieWatchlist: state.movieWatchlist,
        tvShowWatchlist: state.tvShowWatchlist,
        favourite: state.favourite,
        addMovieToWatchlist,
        addTvShowToWatchlist,
        removeMovieFromWatchlist,
        addMovieToFavourite,
        removeMovieFromFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
