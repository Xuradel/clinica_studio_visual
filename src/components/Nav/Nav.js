import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <img 
            className='nav-logo'
            alt='logo'
            src={require('../../assets/LOGO-CSV2.webp')}
        />
    </nav>
  )
}

export default Nav