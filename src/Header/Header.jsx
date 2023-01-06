import React from 'react'
import CTA from './CTA.jsx'
import prashant from"../assets/avatar.svg"
import HeaderSocial from './HeaderSocial.jsx'
import "./Header.css"



const Header = () => {
  return (
    <header>
      <div  className='container header__container'>
        <h5>Hello I'm</h5>
        <h2>Prashant Singh</h2>
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={prashant} alt="Prashant" />
        </div>

        <a href='#Contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header