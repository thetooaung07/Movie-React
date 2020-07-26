import React, {useContext} from 'react'

import "../assets/css/Watchlist.css"
import { GlobalContext } from '../Context/GlobalState'

export const Watchlist = () => {

  const {watchlist} = useContext(GlobalContext)


  return (
    <div className="Watchlist">
      WatchList
    </div>
  )
}


