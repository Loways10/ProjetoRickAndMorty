import React, { useEffect, useState } from 'react'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character`)
                const data = await response.json()
                console.log(data)
                setCharacters(data.results)

            }catch(error){ 
                console.log('Error: ' + error.message)
            }
        }
        http()
    }, [])

  return (
    <div>
      <ul>
        {
            characters.map((item, i) => <li key={i}> 
            {item.name} 
            </li>)
        }
      </ul>
    </div>
  )
}

export default Characters
