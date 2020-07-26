import React from "react";
import "../assets/css/Header.css";


export const Header = () => {

  return (

    <div className="Header d-flex flex-column mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-secondary">Featured</h3>
       

        <ul className="d-flex justify-content-center align-items-center">
          <li className="mx-4 px-3 py-1">
            <i className="fa fa-search"></i>
          </li>
          <li className="mx-4 px-3 py-1">
            <i className="fa fa-bookmark"></i>
          </li>
          <li className="mx-4 px-3 py-1">
            <i className="fa fa-bell"></i>
          </li>
        </ul>
      </div>
      <div className="featured-movie">

      </div>
    </div>
  );
};
