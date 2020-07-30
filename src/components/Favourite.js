import React, { useContext } from "react";
import "../assets/css/Favourite.css";
import { GlobalContext } from "../Context/GlobalState";
import { FavouriteList } from "./FavouriteList";

export const Favourite = () => {

  const { favourite } = useContext(GlobalContext);

  return (
    <div className="Favourite mt-4 w-100">
      <h3 className="text-left">Favourites</h3>
      <hr className=" mb-5" />



      <div className="d-flex justify-content-start align-items-center flex-wrap">
        {favourite && favourite.length > 0 ? (
          favourite.map((favourite) => (
            <FavouriteList key={favourite.id} favourite={favourite} />
          ))
        ) : (
          <h3 className="text-secondary">No Movies</h3>
        )}
      </div>
    </div>
  );
};
