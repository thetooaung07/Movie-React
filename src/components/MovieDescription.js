import React,{useState, useEffect} from 'react'
import Axios from 'axios'
export const MovieDescription = (props) => {
  // console.log(props.match.params.id);

  const [movieDetails, setMovieDetails] = useState([]);

  const getMovieDetails = async() => {
    const res = await Axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
    setMovieDetails(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getMovieDetails();
   
  }, [])

  return (
    <div>
      Hello Id {movieDetails.id}
      <br></br>
      {movieDetails.overview}
    </div>
  )
}
