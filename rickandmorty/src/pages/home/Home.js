import React, { useEffect, useState } from 'react'
import CardCharacter from '../../components/cardCharacter/CardCharacter'

const Home = () => {
  const url = 'https://rickandmortyapi.com/api'
  const [character, setCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    const http = async () => {
        try{
            const response = await fetch(url)
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
    <main>
      <div>
        <h1>Personagens</h1>
      </div>
      <section>
        {/* {
          character.map((item) => (
            <CardCharacter key={item.id} character={item} />
          ))
        } */}
      </section>
    </main>
  )
}

export default Home
