import React from 'react'
import "./Portfolio.css"
import IMG1 from "../assets/IMG1.png"
import IMG2 from "../assets/IMG2.jpg"
import IMG3 from "../assets/IMG3.jpg"
import IMG4 from "../assets/IMG4.jpg"
import IMG5 from "../assets/IMG5.png"
import IMG6 from "../assets/IMG6.jpg"

const Portfolio = () => {

  const data =[
    {
      id: 1,
      img: IMG1,
      title: "Student Database Management System",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
    {
      id: 2,
      img: IMG2,
      title: "Waste Management System",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
    {
      id: 3,
      img: IMG3,
      title: "To-Do List - React",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
    {
      id: 4,
      img: IMG4,
      title: "Library Management System",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
    {
      id: 5,
      img: IMG5,
      title: "Under Process...",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
    {
      id: 6,
      img: IMG6,
      title: "Under Process...",
      github: "https://github.com/its-bnf-cwalker",
      demo: "#"
    },
  ]
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
          data.map(({id, img, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt="student" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn">Github</a>
              <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
            )
          })
        }
        </div>
      </section>
  )
}

export default Portfolio