import React from 'react'
import "./Education.css"
import {GiAchievement} from 'react-icons/gi'

const Education = () => {
  return (
    <section id='education'>

        <h2>Education</h2>

        <div className="container container__education">
            <div className="cllg__section">
                <div className="cllg__section_div">
                    <div className="cllg__icons"><GiAchievement/></div>
                    <div className="cllg__info">
                        <h3>Datta Meghe College of Engineering</h3>
                        <h4 className='subHeader'>B.E in Information Technology</h4>
                    </div>
                </div>
                <div className="duration__time grade">
                <h5>December 2020 - April 2024</h5>
                <h5 className='second'>8.4 CGPA</h5>
            </div>
            </div>
            

        </div>
    </section>
  )
}

export default Education