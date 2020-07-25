import React from "react";
import "../assets/css/RightSidebar.css";
import { Link } from "react-router-dom";

export const RightSidebar = () => {
  return (
    <div className="Sidebar-layer">
    <div className="RightSidebar">
      <div className="Logo text-left mb-5">
        <h3 className="p-2">Logo</h3>
        
      </div>

      <ul className="ul-nav d-flex flex-column align-items-start">
        <li className="li-1">
          <Link to="/">HOME</Link>
        </li>
        <div className="li-2">
          <li className="">
            <Link to="/tvshow">TV Show</Link>
          </li>
          <li className="">
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li className="li-Watched">
            <Link to="/watched">Watched</Link>
          </li>
        </div>
        <div className="li-3 text-left">
        <li className="">Setting</li>
        <li className="">Membership</li>
        <li className="">Sign Out</li></div>
      </ul>
    </div></div>
  );
};
