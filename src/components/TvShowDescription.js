import React, { useState, useEffect } from "react";
import Axios from "axios";
import { SimilarTvShow } from "./SimilarTvShow";

export const TvShowDescription = (props) => {

  const [tvShowDetails, setTvShowDetails] = useState([]);
  const [genreArr, setGenreArr] = useState([]);


  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/${props.match.params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      setTvShowDetails(res.data);
      setGenreArr(res.data.genres);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="MovieDescription">
      <h3 className="text-left">TV Show Description</h3>
      <hr className=" mb-4" />

      <div className="d-flex WrapperDiv">
        <div className="d-flex">
          <div className="imgContainer d-flex flex-column align-items-start mr-5">
            <img
              className="bgImg"
              src={`https://image.tmdb.org/t/p/w200${tvShowDetails.poster_path}`}
              alt={tvShowDetails.title}
            />
            <div className="genres titleEditor">
              {genreArr.map((genre) => (
                <span key={genre.id} className="pr-1">
                  {genre.name}/
                </span>
              ))}
            </div>
            {tvShowDetails.tagline && (
              <div className="movieTagline text-left">
                <span className=" text-danger">Tagline:</span>{" "}
                {tvShowDetails.tagline}
              </div>
            )}
          </div>

          <div className="text-left">
            <a href={tvShowDetails.homepage}>
              <p>
                {tvShowDetails.name} 
                (Season {tvShowDetails.number_of_seasons})
              </p>
            </a>

            <div className="d-flex">
              Overview: <div className="ml-2">{tvShowDetails.overview}</div>
            </div>
            <p>Run Time: &nbsp;{tvShowDetails.episode_run_time} Minutes per Episode</p>
            <p> Total Numbers of Episdoes : {tvShowDetails.number_of_episodes}</p>
           
          </div>
        </div>


      </div>

      <div className="SimilarMovie mt-5">
        <h4 className="text-left">Similar Shows</h4>
        <hr className="mb-5" />
        <div className="">
          <SimilarTvShow id={props.match.params.id} />
        </div>
      </div>
    </div>
  )
}
