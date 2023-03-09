import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
  
  return (
    <header>
      <div>
        <NavLink to='/'>R&M</NavLink>
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
