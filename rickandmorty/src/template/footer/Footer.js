import React from 'react'
import './index.css'

const Footer = () => {
  const now = new Date()

  return (
    <footer>
      <p>
        @ {now.getFullYear()} Akio Hashimoto :)
      </p> 
    </footer>
  )
}

export default Footer
