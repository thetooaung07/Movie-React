import React from "react";
import "../assets/css/SearchResult.css";

export const SearchResult = ({ res }) => {
  return (
    <div className="SearchResult w-50">
   
      <div className="result-card">
        <div className="poster-wrapper">
          {res.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${res.poster_path}`}
              alt={`${res.title} Poster`}
            />
          ) : (
            <div className="filler-poster">
              <span>Not Found</span>
            </div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{res.title}</h3>
            <h4 className="release-date text-left">
              {res.release_date ? res.release_date.substring(0, 4) : "-"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
