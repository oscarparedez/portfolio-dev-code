/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import Typical from 'react-typical'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin, faGithub, faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import avatar from './avatar.png'

const contactContainer = css`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    .contactTitleContainer h1 {
        font-family: 'Lato', sans-serif;
        font-size:80px;
        color: #fff;
        -webkit-text-stroke: 2px black;
    }
    h4 {
        font-family: 'Lato', sans-serif;
        font-size:20px;
        color: #fff;
    }
    .avatarContainer {
        width: 150px;
        height: 150px;
        box-sizing: border-box;
        border: 5px white solid;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        /* transform: translatey(0px); */
        animation: float 3s ease-in-out infinite;
        img {
            width:110px;
            position:relative;
            left:10%;
        }
    }

    .contactArea {
        width:10%;
        transition:1s;
        .socialMedia {
            list-style:none;
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:100%;
            padding:0;
            li {
                font-size:30px;
                color:white;
                transition: transform .5s ease-in-out;
            }
            li:hover {
            transform: rotate(360deg);
          }
        }
        h6 {
            font-family: 'Karla', sans-serif;
            font-size: 12px;
            color:white;
            /* text-decoration:underline; */
            text-align:center;
          }
    }
    .mailArea {
        h5 {
            font-family: 'Karla', sans-serif;
            font-size: 16px;
            color:white;
            margin-top:0;
            text-decoration:underline;
        }
    }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-30px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
    }
    @media screen and (max-width:1700px) {
      .contactArea {
        width:30%;
      }
    }
      @media screen and (max-width:800px) {
      .contactArea {
        width:60%;
      }
    }

`

const Contact = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className={contactContainer}>
      <div className="contactTitleContainer">
        <h1>Now what?</h1>
      </div>
      <div className="avatarContainer">
        <img src={avatar} />
      </div>
      <div className="textContainer">
        <Typical
          steps={['Be sure to contact me for any collaboration.', 2000, 'Be sure to contact me if you need an outstanding website.', 2000, 'Be sure to contact me if you need an awesome app.', 2000, 'Be sure to contact me for any project you think I can be useful.', 2000]}
          loop={Infinity}
          wrapper="h4"
        />
      </div>
      <div className="mailArea">
        <h5>oaparedez17@gmail.com</h5>
      </div>
      <div className="contactArea">
        <ul className="socialMedia">
          <a href="https://github.com/oscarparedez/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faGithub} /></li></a>
          <a href="https://www.linkedin.com/in/oscar-paredez-593067179/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
          <a href="https://discord.com/users/677678932564377602" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faDiscord} /></li></a>
        </ul>
        <h6>Developed by Oscar Paredez - 2021</h6>
      </div>
    </div>
  )
}

export default Contact
