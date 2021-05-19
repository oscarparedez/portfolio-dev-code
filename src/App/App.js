/* eslint-disable react/style-prop-object */
import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Skills from '../Skills'
import Contact from '../Contact'
import 'aos/dist/aos.css'

const minWidthStyle = css`
  min-width:650px;

`
const screenContainer = css`
  height:100vh;
`

const screenContainer2 = css`
  margin-top:10vh
`

const styles = css`
  background: rgb(0,212,255);
  background: radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(0,108,255,1) 100%);
    
`
const contactDiv = css`
  height:600px;
`

const App = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className={minWidthStyle}>
      <div className={[styles, screenContainer].join(' ')} id="home">
        <Navbar />
        <Home />
      </div>
      <div data-aos="fade-up" className={screenContainer} id="about">
        <About />
      </div>
      <div data-aos="fade-up" id="projects" className={screenContainer2}>
        <Projects />
      </div>
      <div data-aos="fade-up" id="skills">
        <Skills />
      </div>
      <div className={[styles, contactDiv].join(' ')} data-aos="fade-up" id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
