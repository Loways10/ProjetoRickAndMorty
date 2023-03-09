import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {id} = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
      const http = async () => {
          try{
              const response = await fetch(`${url}/character/${id}`)
              const data = await response.json()
              console.log(data)
              setCharacter({...data})

          }catch(error){ 
              console.log('Error: ' + error.message)
          }
      }
      http()
  }, [])
    
  return (
    <div>
      <h1>{character.name}</h1>
      <div className='image'>
        <img src={character.image} alt="profile-pic" />
      </div>
      <div className="info">
        <p>{character.status}</p>
        <p>{character.gender}</p>
        <p>{character.species}</p>
        <p>{character?.origin?.name}</p>
      </div>
    </div>
  )
}

export default Character
