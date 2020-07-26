import React,{useState, useEffect} from 'react'
import "../assets/css/TvShow.css"
import Axios from 'axios'
import { MovieCard } from './MovieCard';


export const TvShow = () => {

  const [tvShows, setTvShows] = useState([]);
  const getTvShows =  async () => {
    const res = await Axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
    setTvShows(res.data.results)
    console.log("TVShow Api called");
    console.log(res.data.results);
  }
  useEffect(()=> {
    getTvShows();
  },[])

  return (
    <div className="TvShow">
      {
        tvShows && tvShows.length > 0 && 
        tvShows.map((tvShow) => (
          <MovieCard key={tvShow.id} type="TvShow" tvShow={tvShow}></MovieCard>
        ))
      }
    </div>
  )
}
