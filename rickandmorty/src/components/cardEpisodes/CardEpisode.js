import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div>
        <h3>{episode.name}</h3>
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
        <p>{episode.created}</p>
    </div>
  )
}

export default CardEpisode
