import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
