import React from 'react'
import {genres} from '../utils'

export const Genre = ({id}) => {
  const genObjs = genres.find((genObj) => genObj.id === id);
  return (
    <div className="Genre mr-1">
      {genObjs.name}/
    </div>
  )
}
