import React, { useState } from "react";
import "../assets/css/Search.css";
import Axios from "axios";
import { SearchResult } from "./SearchResult";
import { CSSTransition } from "react-transition-group";

export const Search = () => {
  const [input, setInput] = useState("");
  const [resultIndi, setResultIndi] = useState();
  const [data, setData] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const getSearchResult = async () => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
      );
      if (res.data.results && res.data.results.length > 0) {
        setData(res.data.results);
        setResultIndi(true);
        console.log(res.data.results);
      } else {
        setData([]);
        setResultIndi(false);
      }
    } catch (error) {
      console.log(error);
      setData([]);
      setResultIndi(false);
    }
  };
  const handleMouseEnter = () => {
    setSearchOpen(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    getSearchResult();
    // setSearchOpen(false);
    // setInput("");
  };

  return (
    <div className="Search w-100 pt-4">
      <div className="container d-flex justify-content-center align-items-center mb-4">
        <h4 className="mr-2">Search Movie</h4>

        <div className="w-50">
          <div className="d-flex justify-content-start h-100 ml-3">
            <div className="searchbar" onMouseEnter={handleMouseEnter}>
              <CSSTransition
                in={searchOpen}
                timeout={10000}
                classNames="alert"
                onEnter={() => setSearchOpen(true)}
              >
                {searchOpen ? (
                  <form onSubmit={(event) => submitHandler(event)}>
                    <input
                      required
                      className="search_input"
                      type="text"
                      name=""
                      placeholder="Search..."
                      onChange={(event) => {
                        event.preventDefault();
                        setInput(event.target.value);
                      }}
                    />
                    <button className="btn btn-sm initial-search-icon search_icon">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                ) : (
                  <button className="btn btn-sm text-danger initial-search-icon">
                    <i className="fa fa-search"></i>
                  </button>
                )}
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>

      {data && data.length > 0 && resultIndi === true && (
        <>
          <h5 className="text-secondary text-left">Search Result : {input}</h5>
          <hr className="mt-1 mb-4"></hr>
          <div className="SearchResult-container">
            {data.map((res) => (
              <SearchResult key={res.id} res={res} />
            ))}
          </div>
        </>
      )}

      {resultIndi === false && (
        <h4 className="text-secondary">Result Not Found</h4>
      )}
    </div>
  );
};
