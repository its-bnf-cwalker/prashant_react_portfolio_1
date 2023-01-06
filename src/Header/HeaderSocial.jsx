import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin className='social_web'/></a>
        <a href='https://github.com' target="_blank"><BsGithub className='social_web'/></a>
        <a href='https://twitter.com' target="_blank"><BsTwitter className='social_web'/></a>
    </div>
  )
}

export default HeaderSocial