import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div>
        <h3>{episode.name}</h3>
        <p>{episode.episode}</p>
        <p>Lançado em: {episode.air_date}</p>
        <p>Criado em: {episode.created}</p>
    </div>
  )
}

export default CardEpisode
