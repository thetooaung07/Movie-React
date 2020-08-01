import React,{useState, useEffect} from 'react';
import Axios from 'axios';

export const SimilarTvShow = ({id}) => {

  const [similarShows, setSimilarShows] = useState([]);


  const getMovieDetails = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      );
      const resArr = res.data.results.slice(0,5);
      setSimilarShows(resArr);
      
      console.log(resArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="SimilarTvShows d-flex">
      {similarShows.map((tvShow) => (
        <div className="FavouriteMovie m-2 mb-3" key={tvShow.id}>
          <div className="posRelative" >
            <img
              className="img-wh round-border"
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={tvShow.name}
            />
          </div>
          <div className="d-flex flex-column">
            <h6 className="titleEditor">{tvShow.name}</h6>
          </div>
        </div>
      ))}
    </div>
  )
}
