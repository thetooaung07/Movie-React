import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../assets/css/MovieDescription.css";
import { SimilarMovie } from "./SimilarMovie";
export const MovieDescription = (props) => {
  // console.log(props.match.params.id);

  const [movieDetails, setMovieDetails] = useState([]);
  const [genreArr, setGenreArr] = useState([]);
  const [showCollection, setShowCollection] = useState(true);

  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      setMovieDetails(res.data);
      setGenreArr(res.data.genres);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="MovieDescription">
      <h3 className="text-left">Movie Description</h3>
      <hr className=" mb-4" />

      <div className="d-flex WrapperDiv">
        <div className="d-flex">
          <div className="imgContainer d-flex flex-column align-items-start mr-5">
            <img
              className="bgImg"
              src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className="genres">
              {genreArr.map((genre) => (
                <span key={genre.id} className="pr-1">
                  {genre.name}/
                </span>
              ))}
            </div>
            <div className="movieTagline text-left">
              <span className=" text-danger">Tagline:</span>{" "}
              {movieDetails.tagline}
            </div>
          </div>

          <div className="text-left">
            <a href={movieDetails.homepage}>
              <p>
                {movieDetails.title} (
                {movieDetails.release_date &&
                  movieDetails.release_date.substring(0, 4)}
                )
              </p>
            </a>

            <div className="d-flex">
              Overview: <div className="ml-2">{movieDetails.overview}</div>
            </div>
            <p>Run Time: &nbsp;{movieDetails.runtime} Minutes.</p>
          </div>
        </div>

        {movieDetails.belongs_to_collection && (
          <div className="Collection pl-3">
            <button
              className="btn btn-info btnCollection"
              onClick={() => setShowCollection(!showCollection)}
            >
              Show Collection
            </button>
            <div hidden={showCollection}>
              <img
                className="float-right"
                src={`https://image.tmdb.org/t/p/w200${movieDetails.belongs_to_collection.poster_path}`}
                alt={movieDetails.title}
              />
              
            </div><div hidden={showCollection}>{movieDetails.belongs_to_collection.name}</div>
          </div>
        )}
      </div>



      <div className="SimilarMovie"> 
          <h4 className="text-left">Similar Movie</h4>
          <hr className="mb-3"></hr>

          <SimilarMovie id={props.match.params.id}></SimilarMovie>
       </div>


    </div>
  );
};
