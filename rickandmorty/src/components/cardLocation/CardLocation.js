import React from 'react'

const CardLocation = ({location}) => {
  return (
    <div>
      <h3>{location.name}</h3>
      <p>Tipo: {location.type}</p>
      <p>Dimensão: {location.dimension}</p>
    </div>
  )
}

export default CardLocation
