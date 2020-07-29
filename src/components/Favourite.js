import React, { useContext } from "react";
import "../assets/css/Favourite.css";
import { GlobalContext } from "../Context/GlobalState";
import { FavouriteList } from "./FavouriteList";

export const Favourite = () => {
  const { favourite } = useContext(GlobalContext);

  return (
    <div className="Favourite mt-4 w-100">

      <h4 className="text-left">Favourites</h4>
      <hr></hr>

      { favourite && favourite.length > 0 ? 
        favourite.map((favourite) => (
          <FavouriteList key={favourite.id} favourite={favourite}/>
        )) : <h3 className="text-secondary mt-5">No Movies</h3>
      }
    </div>
  );
};
