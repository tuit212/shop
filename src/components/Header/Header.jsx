import React from 'react'
import "./Header.scss"
import Logo from '../Header/HeaderImg/logo.png'
function Header() {
  return (
    <>
    <header className='header'>
        <div className="container">
            <div className="hero">
              <img src={Logo} alt=""  className='hero__logo'/>
                  <ul className='hero__list'>
                    <li>salom </li>
                    <li>salom</li>
                    <li>alik </li>
                  </ul>
                  
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
