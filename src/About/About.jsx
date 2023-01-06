import React from 'react'
import prashant from "../assets/me.png"
import {GiAchievement} from "react-icons/gi"
import {TbFileCertificate} from "react-icons/tb"
import {AiFillFolderOpen} from "react-icons/ai"
import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h5>Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={prashant} alt="prashant" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Month</small>
            </article>
            <article className='about__card'>
              <TbFileCertificate className="about__icon"/>
              <h5>Certifications</h5>
              <small>10+ Certificate</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Passionate Developer, Seeking an internship in an eminent company where I can utilize all the knowledge that I received from my college, workshop, and Bootcamp  by doing so many great  projects and want to provide satisfactory results  </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About