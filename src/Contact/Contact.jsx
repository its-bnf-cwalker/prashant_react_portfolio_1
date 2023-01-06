import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import "./Contact.css"
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x43xywk', 'template_drdrvv9', form.current, 'X1oRLkT1H61zghCDB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.taregt.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>prashantmaharaja2002@gmail.com</h5>
            <a href="mailto:prashantmaharaja2002@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <AiFillLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Prashant Singh</h5>
            <a href="https://www.linkedin.com/in/prashant-singh91/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+919326547332</h5>
            <a href="https://api.whatsapp.com/send?phone=9326547332" target="_blank">Send a message</a>
          </article>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea rows="7" name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact