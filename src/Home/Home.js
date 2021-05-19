/* eslint-disable max-len */
import React from 'react'
import { css } from '@linaria/core'
import Typical from 'react-typical'
import Aos from 'aos'
import 'aos/dist/aos.css'

const homeContainer = css`
    color:#fff;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .dot {
      width:12px;
      height:12px;
      background-color: white;
      border-radius:25%;
      position:absolute;
      animation-name: spin;
      animation-duration: 1500ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear; 
    }
    .dot-1{
        left:10%;
        top:15%;
      }
      .dot-2{
        left:35%;
        top:25%;
      } 
      .dot-3{
        left:55%;
        top:20%;
      }
      .dot-4{
        left:85%;
        top:35%;
      }
      .dot-5{
        left:15%;
        top:65%;
      }
      .dot-6{
        left:45%;
        top:85%;
      }
      .dot-7{
        left:80%;
        top:70%;
      }
      .dot-8{
        left:95%;
        top:95%;
      } 
      .dot-9{
        left:70%;
        top:10%;
      } 
      .dot-10{
        left:65%;
        top:90%;
      }       
    @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
    }
    h1 {
        font-size:80px;
        font-family: 'Lato', sans-serif;
        div {
          white-space: pre-line;
        }
    }
    h1 span {
        font-size:16px;
        font-family: 'Karla', sans-serif;
        line-height:35px;
    }
    @media screen and (max-width:950px) {
      h1{
        font-size:50px;
      }
      h1 span {
        font-size:12px;
      }
    }
    @media screen and (max-width:700px) {
      h1{
        font-size:30px;
      }
      h1 span {
        font-size:10px;
      }
    }
    @media screen and (max-width:550px) {
      
      h1{
        font-size:25px;
      }
      h1 span {
        font-size:10px;
      }
    }
`

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div className={homeContainer} data-aos="zoom-in">
      <div className="dot dot-1" />
      <div className="dot dot-2" />
      <div className="dot dot-3" />
      <div className="dot dot-4" />
      <div className="dot dot-5" />
      <div className="dot dot-6" />
      <div className="dot dot-7" />
      <div className="dot dot-8" />
      <div className="dot dot-9" />
      <div className="dot dot-10" />
      <h1>
        <span>Hi. My name is</span>
        <Typical
          steps={['', 2500, 'Oscar Paredez.\n', 2000, 'Oscar Paredez.\n I am a creative full-stack developer.', 2500, 'Oscar Paredez.\n I love to learn every day.', 2500, 'Oscar Paredez.\n I build things for the web.', 2500]}
          loop={1}
          wrapper="div"
        />
        <span>I'm a Guatemalan-based computer science engineer who loves to be productive every day. <br />Currently I am focused on web developing, including both front-end and back-end.</span>
      </h1>
    </div>
  )
}

export default Home
