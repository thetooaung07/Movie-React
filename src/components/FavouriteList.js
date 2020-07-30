import React, { useContext } from "react";
import "../assets/css/FavouriteList.css";
import { Genre } from "./Genre";
import { GlobalContext } from "../Context/GlobalState";


export const FavouriteList = ({ favourite }) => {


  const {removeMovieFromFavourite} = useContext(GlobalContext);


  return (
    <div className="FavouriteList ml-2 mb-3 d-flex justify-content-start align-items-center round-border">
      <div className="mr-2">
        <img
          className="imageResize"
          src={`https://image.tmdb.org/t/p/w92${favourite.poster_path}`}
          alt={favourite.title}
        />
      </div>

      <div className="d-flex flex-column">
        <h5 className="text-left">{favourite.title}</h5>
        <p className="text-left">
          Popularity {favourite.popularity.toFixed(2)}
        </p>
        <div className="d-flex mb-1">
        
          {favourite.genre_ids.map((id) => (
            <Genre key={id} id={id}></Genre>
          ))}
        </div>
      </div>
      <button className="btn btn-sm remove-fav" onClick={()=> removeMovieFromFavourite(favourite.id)}><i className="fa fa-times"></i></button>
    </div>
  );
};
