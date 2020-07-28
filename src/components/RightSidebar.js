import React from "react";
import "../assets/css/RightSidebar.css";
import { Link } from "react-router-dom";

export const RightSidebar = () => {
  return (
    <>
    <div className="margin-filler"></div>
      <div className="RightSidebar d-flex flex-column justify-content-center align-items-center">
        <div className="Logo  mb-5">
          <h3 className="">Logo</h3>
        </div>

        <ul className="ul-nav d-flex flex-column align-items-start">
          <li className="li-1">
            <Link to="/">HOME</Link>
          </li>
          <div className="li-2">
            <li className="">
              <Link to="/tvshow">TV Shows</Link>
            </li>
            <li className="li-watchlist">
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li className="li-Favourite">
              <Link to="/favourite">Favourite</Link>
            </li>
          </div>
          <div className="li-3 text-left">
            <li className="">Setting</li>
            <li className="">Membership</li>
            <li className="">Sign Out</li>
          </div>
        </ul>
      </div>
    </>
  );
};
