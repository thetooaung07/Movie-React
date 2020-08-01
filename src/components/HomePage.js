import React, { useState, useEffect } from "react";
import "../assets/css/HomePage.css";
import Axios from "axios";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

export const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      const dataArr = res.data.results;
      console.log("Api Called");
      console.log(res.data.results);
      setData(dataArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="HomePage">
      <Header></Header>
      <hr className="mb-3"></hr>
      <div className="wrapper">
        <h5 className="colorCustom text-left">Upcoming Movies</h5>
        <div className="MovieCard-container">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
