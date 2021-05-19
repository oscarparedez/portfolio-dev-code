/* eslint-disable max-len */
import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import image from './self.JPG'

const aboutContainer = css`
    padding-top:10vh;
    height:100%;
    display:flex;
    justify-content:center;
 
    .background {
        height:80%;
        width:95%;
        background: url("./blue-snow.png");
        display:flex;
        justify-content:space-evenly;
        align-self:center;
        align-items:center;
        border-radius: 20px;
        transition:1s;

        .infoContainer {
        width:30%;
        h1 {
        font-size:80px;
        margin:0;
        color: navy;
        font-family: 'Lato', sans-serif;
        transition:1s;
            span {
                animation-name:changeColor;
                animation-duration: 3000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear; 
            }
            @keyframes changeColor {
                0% {
                    color: red;
                }

                50% {
                    color: rgb(59, 150, 219);
                }

                100% {
                    color: yellow;
                }
            }
        }

        .textInfoContainer {
            transition:1s;
            color: rgba(0,108,255,1);
            width:100%;
            text-align: center;
            p {
                font-size:20px;
                font-family: 'Karla', sans-serif;
                line-height:25px;
                text-align:justify;
            }
        }
    }
    .imageContainer {
        width:30%;
        text-align:center;
        transition:1s;
        img {
            width:400px;
            border-radius:15%;
            box-shadow: 15px 30px 10px rgba(50,50,93,.05);
            transition:margin-top 2s cubic-bezier(0,1.11,.63,.86);
        }
        img:hover {
            margin-top:-15px;
        }
    }
    }
    @media screen and (max-width:1300px) {
    .background {
      height:85%;
    }
    .background .infoContainer h1 {
      font-size:30px;
    }
    .background .infoContainer .textInfoContainer p {
      font-size:18px;
    }
    }
    @media screen and (max-width:1000px) {
    .background {
      height:100%;
    }
    .background .imageContainer img{
      width:200px;
    }
    .background .infoContainer h1 {
      font-size:32px;
    }
    .background .infoContainer .textInfoContainer p {
      font-size:15px;
    }
  }
  @media screen and (max-width:600px) {
    /* .background {
      height:100%;
    } */
    .background .imageContainer img{
      width:150px;
    }
  }

`

const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className={aboutContainer}>
      <div className="background">
        <div className="infoContainer" data-aos="zoom-in">
          <h1>Hey<span>.</span></h1>
          <div className="textInfoContainer">
            <p>Hello. My name is Oscar and I am a Guatemalan 20-year old life enthusiast. <br /><br />
              English and Spanish are two languages I can speak and understand.  <br /><br />
              I have two big passions: soccer and of course, web developing. <br /><br />
              Throughout my childhood and teenager days I developed several technological skills, such as photo & video editing, ethical hacking and full-stack developing. <br /><br />
              Currently, I am in my fifth semester of Computer Science Engineering degree.<br /><br />
              One of my rules is to never stop learning and be somehow productive every day. <br /><br />
            </p>
          </div>
        </div>
        <div className="imageContainer" data-aos="zoom-in">
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default About
