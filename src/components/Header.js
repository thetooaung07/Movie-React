import React from "react";
import "../assets/css/Header.css";


export const Header = () => {

  return (

    <div className="Header d-flex flex-column mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="colorCustom">Featured</h3>
        

        <ul className="d-flex">
          <li className="iconRound rounded">
            <i className="fa fa-search"></i>
          </li>
          <li className="iconRound rounded">
            <i className="fa fa-bookmark-o"></i>
          </li>
          <li className="iconRound rounded">
            <i className="fa fa-bell"></i>
          </li>
        </ul>
      </div>
      <div className="featured-movie">
          {/* To add a full width div for a featured Movie like Today Special */}
      </div>
    </div>
  );
};
