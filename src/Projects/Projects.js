import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import 'aos/dist/aos.css'

const projectsContainer = css`
    padding-top:10vh;
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    color: rgba(0,108,255,1);
    .cards-container {
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(209,250,255,1) 58%, rgba(209,250,255,1) 100%);
      .card {
        height:250px;
        transition: 0.5s;
        border: 1px solid rgb(255, 255, 255);
        display:flex;
        align-items: center;

        &:hover { 
          box-shadow: 0 0 100px rgba(20,2,61,.2);
        }
        &:hover .card-content .card-info h3{
          font-size:70px;
        }
        &:hover .card-content .card-info p{
          font-size:18px;
        }
      }
      .card .card-content {
        width:100%;
        display:flex;
        align-items:center;
        justify-content: space-around;
        text-align:center;
        .card-title {
          color:navy;
        }
        .card-number {
          font-size:100px;
          margin:0;
        }
        .card-info h3 {
          font-size:65px;
          margin:0;
          transition:1s;
        }
        .card-info p {
          margin:0;
          font-family: 'IBM Plex Sans', sans-serif;
          transition:1s;
        }
        .card-btn .button {
          text-decoration: none;
          border:none;
          border:solid 1px navy;
          border-radius: 25px;
          background: transparent;
          padding: 15px 25px;
          font-family: 'Lato', sans-serif;
          transition: 0.15s;
          &:hover {
            border:none;
            background-color: navy;
            border-color:white;
            color:white;
            cursor:pointer;
          }
        }
      }
    }

    @media screen and (max-width:1200px){
      .cards-container .card .card-content .card-number{
        font-size:40px;
      }
      .cards-container .card .card-content .card-info .card-heading{
        font-size:50px;
      }
      .cards-container .card:hover .card-content .card-info .card-heading{
        font-size:53px;
      }
    }

    @media screen and (max-width:950px) {
    .cards-container .card .card-content .card-title h3{
      font-size:40px;
    }
    .cards-container .card .card-content .card-title p{
      font-size:13px;
    }
    .cards-container .card .card-content .card-number{
      display: none;
    }
    .cards-container .card .card-content .card-info .card-heading{
      font-size:38px;
    }
    .cards-container .card:hover .card-content .card-info .card-heading{
      font-size:41px;
    }
    .cards-container .card .card-content .card-btn .button{
      padding: 10px 15px;

    }
  }
`

const Projects = () => {
  React.useEffect(() => {
    Aos.init({ duration: 4000 })
  }, [])
  return (
    <div className={projectsContainer}>
      <div className="cards-container">
        <div className="card" data-aos="fade-up">
          <div className="card-content">
            <div className="card-info card-title">
              <h3 className="card-heading">Some Things I've Built</h3>
              <p className="card-text">Here are some of my personal projects I have done so far.</p>
              <p className="card-text">These projects include school, college and more professional projects.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-content">
            <p className="card-number">001</p>
            <div className="card-info">
              <h3 className="card-heading">React-Based Calculator</h3>
              <p className="card-text">ft. React Testing Library</p>
            </div>
            <div className="card-btn">
              <a href="https://oscarparedez.herokuapp.com/calculator/" target="_blank" rel="noreferrer" className="button">SEE PROJECT</a>
              {/* <button type="button">SEE PROJECT</button> */}
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-content">
            <p className="card-number">002</p>
            <div className="card-info">
              <h3 className="card-heading">Github Pages Replica</h3>
              <p className="card-text">Project based in React with the intention of practicing.</p>
            </div>
            <div className="card-btn">
              <a href="https://oscarparedez.herokuapp.com/githubpagesreplica/" target="_blank" rel="noreferrer" className="button">SEE PROJECT</a>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-content">
            <p className="card-number">003</p>
            <div className="card-info">
              <h3 className="card-heading">React Maze Game</h3>
              <p className="card-text">React game that involves a fetch from an external API.</p>
            </div>
            <div className="card-btn">
              <a href="https://oscarparedez.herokuapp.com/maze/" target="_blank" rel="noreferrer" className="button">SEE PROJECT</a>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-content">
            <p className="card-number">004</p>
            <div className="card-info">
              <h3 className="card-heading">Music Service</h3>
              <p className="card-text">Simple front-end but the ideal backend.</p>
            </div>
            <div className="card-btn">
              <a href="https://mysitebasesproyecto.herokuapp.com/" target="_blank" rel="noreferrer" className="button">SEE PROJECT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
