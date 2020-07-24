import React from 'react'
import { Link } from 'react-router-dom'

export const RightSidebar = () => {
  return (
    <div className="RightSidebar text-danger">
      
      <div className="">
        <Link to="/">HOME</Link>
      </div>
      <div className="">
        <Link to="/watchlist">Watchlist</Link>
      </div>
      <div className="">
        <Link to="/watched">Watched</Link>
      </div>
    </div>
  )
}


