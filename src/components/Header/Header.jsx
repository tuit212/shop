import React from 'react'
import "./Header.scss"
import Logo from '../Header/HeaderImg/logo.png'
import Link from 'react-router-dom'
function Header() {
  return (
    <>
    <header className='header'>
      <div className="container">
      <div className="hero">
        <img src={Logo} alt=""  className='hero__logo'/>
        <ul className='hero__list'>
        <li>
            <Link to='/Corusel'>About</Link>
        </li>
        <li>
             <Link to='/Hero'>Hero</Link>
        </li>
         <li>
         <Link to='/Main'>Main</Link>
        </li>
        </ul>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header
