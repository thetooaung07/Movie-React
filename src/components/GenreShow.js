import React from "react";
import { show_Genres } from "../utils";

export const GenreShow = ({ id }) => {
  const genObjs = show_Genres.find((genObj) => genObj.id === id);
  return <div className="GenreShow mr-1">{genObjs.name}/</div>;
};
