import './index.css'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Header = () => {
  const [ pesquisar, setPesquisar ] = useState("")
  const navigate = useNavigate()
  
  const search = () => {
    if(pesquisar.trim()){
      navigate(`/search/${pesquisar}`)
      setPesquisar('')
    }
  }

  return (
    <header>
      <div>
        <NavLink to='/'>R&M</NavLink>
      </div>
      <div className='search-bar'>
        <input type="search" onChange={(e) => setPesquisar(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? search() : null} value={pesquisar} />
        <button onClick={search}>🔍</button>
      </div>
      <div className='navigation'>
        <NavLink to='/characters'>Personagens</NavLink>
        <NavLink to='/locations'>Locais</NavLink>
        <NavLink to='/episodes'>Episódios</NavLink>
      </div>
    </header>
  )
}

export default Header
