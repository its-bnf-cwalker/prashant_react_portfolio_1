import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Footer from './Footer/Footer'
import Header from './Header/Header.jsx'
import Nav from './Nav/Nav'
import Portfolio from './Portfolio/Portfolio'

function App(){
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Education/>
        <Portfolio/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default App