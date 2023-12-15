import React from 'react'
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>I miei skills</h5>
      <h2>La mia esperienza</h2>
      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Html</h4>
                <small>Avanzato</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Css</h4>
                <small>Intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small>intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small>Base</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small>Base</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>React</h4>
                <small>Base</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience-backend'>
          <h3>Backend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Java</h4>
                <small>Intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Spring</h4>
                <small>Intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Jakarta</h4>
                <small>intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Node Js</h4>
                <small>Base</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small>Base</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>SQL</h4>
                <small>Intermedio</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>React</h4>
                <small>Base</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

