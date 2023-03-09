import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({character}) => {

    const navigate = useNavigate()
    const seeMore = (id) => {
        navigate(`/character/${id}`)
    }
  return (
    <div onClick={() => seeMore(character.id)}>
      <div className='image'>
        <img src={character.image} alt="profile-pic" />
      </div>
      <div className="info">
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  )
}

export default CardCharacter
