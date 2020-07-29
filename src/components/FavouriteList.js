import React from "react";
import "../assets/css/FavouriteList.css";


export const FavouriteList = ({ favourite }) => {

  

  return (
    <div className="FavouriteList mb-3 d-flex justify-content-start align-items-center">
      <div className="mr-2">
        <img
          className="imageResize"
          src={`https://image.tmdb.org/t/p/w92${favourite.poster_path}`}
          alt={favourite.title}
        />
      </div> 
      
      <div className="d-flex flex-column align-items-center">
        <h5>Heading / Name</h5>
        <p>Description</p>
      </div>
      
      
      
    </div>
  );
};
