import React from 'react';
import './about.css';
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Tutto</h5>
      <h2>su di me</h2>
      <div className='about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={ME} alt='about-me' />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article>
          </div>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <a href='#contact' className='btn btn-primary'>Contattami</a>
        </div>
      </div>
    </section>
  )
}

export default about
