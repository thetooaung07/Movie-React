import React,{useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const WatchlistShow = ({tvShow}) => {
  const [isHovering, setIsHovering] = useState(false);
  const {removeTvShowFromWatchlist} = useContext(GlobalContext)
  return (
    <div className="WatchlistShow  m-2 mb-3">
      <div
        className="posRelative mb-1"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          className="round-border"
          src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
          alt={`${tvShow.name} Poster`}
        />
        {isHovering && (
          <div className="card-hover">
            <div className="w2-hover">
              <button
                className="btn btn-sm text-light"
                onClick={() => removeTvShowFromWatchlist(tvShow.id)}
              >
                <i className="fa fa-eye-slash"></i>
              </button>
            </div>

            <div className="title-rd-hover">
              {tvShow.name}
              {tvShow.first_air_date && (
                <div className="">{tvShow.first_air_date.substring(0, 4)}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
