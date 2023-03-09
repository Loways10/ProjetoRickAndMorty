import React from 'react'

const CardLocation = ({location}) => {
  return (
    <div>
      <h3>{location.name}</h3>
      <p>{location.type}</p>
      <p>{location.dimension}</p>
    </div>
  )
}

export default CardLocation
