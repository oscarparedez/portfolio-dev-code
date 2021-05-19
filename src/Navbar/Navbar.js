import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import 'aos/dist/aos.css'

const navbarContainer = css`
  display:flex;
  justify-content:space-between;
  width:90%;
  margin: 0 auto; 
  padding-top:30px;
`

const logoContainer = css`

  h6 {
      margin:0;
      border-left:3px solid white;
      padding-left:12px;
      color: #fff;
      text-transform:uppercase;
      font-size:16px;
      font-family: 'Lato', sans-serif;
    }
`
const menuContainer = css`
  a {
      margin:0;
      color: #fff;
      font-size:16px;
      margin-left:35px;
      text-decoration:none;
      transition: 300ms;
      border-bottom: 3px solid transparent;
      font-family: 'Karla', sans-serif;
    }
  a:hover {
  border-color: white;
  }
  @media screen and (max-width:700px) {
      a {
        font-size:12px;
      }
    }
`

const Navbar = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className={navbarContainer} data-aos="zoom-in">
      <div className={logoContainer}>
        <h6>Oscar<br />Paredez</h6>
      </div>
      <div className={menuContainer}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Personal Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  )
}

export default Navbar
