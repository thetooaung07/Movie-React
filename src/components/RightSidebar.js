import React from "react";
import "../assets/css/RightSidebar.css";
import { Link } from "react-router-dom";

export const RightSidebar = () => {
  return (
    <>
      <div className="margin-filler"></div>

      <div className="RightSidebar">

    <div>
        <div className="Logo mb-1">
          <i className="fa fa-user-circle"></i>
        </div>
        <div className="mt-0">
          <div className="divEdit mt-0">
            <span className="iconEdit">
              <i className="fa fa-angle-double-up"></i>
            </span>
            <span className="colorCustom">Thet Oo Aung</span>
          </div>
          <p className="text-warning">Premium Member</p>
        </div>
</div>
        <div className="LinksContainer mt-0 mb-5 pb-2">
          <div className="Links d-flex flex-column align-items-center justify-content-center mb-5 pb-5">
            <div className="LinkEdit">
              <Link to="/" className="redColor">HOME</Link>
            </div>
            <div className="LinkEdit">
              <Link to="/tvshow" className="redColor">TV Shows</Link>
            </div>
            <div className="LinkEdit">
              <Link to="/watchlist" className="redColor">Watchlist</Link>
            </div>
            <div className="LinkEdit mb-3">
              <Link to="/favourite" className="redColor">Favourite</Link>
            </div>
          </div>

          <div className="mt-5 mb-5">
            <button type="button" className="btn btn-link redColor">
              Setting
            </button>
            <button type="button" className="btn btn-link  redColor">
              Membership
            </button>
            <button type="button" className="btn btn-link redColor">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
