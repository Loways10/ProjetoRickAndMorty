import React from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {id} = useParams()
    
  return (
    <div>
      PERSONAGEM CARD
    </div>
  )
}

export default Character
