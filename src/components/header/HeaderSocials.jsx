import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/john-mukenge/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/johnmukenge' target='_blank' rel='noreferrer'><FaGithub /></a>
      <a href='https://twitter.com/johnmukenge' target='_blank' rel='noreferrer'><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials
