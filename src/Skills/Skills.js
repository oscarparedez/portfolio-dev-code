import React from 'react'
import { css } from '@linaria/core'
import Aos from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3, faGithub, faReact, faSellsy, faPython, faPhp, faAngular,
} from '@fortawesome/free-brands-svg-icons'
import { SiWebpack } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import 'aos/dist/aos.css'

const skillsContainer = css`
  height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
    .skillsDiv {
        background: url("./blue-snow.png");
        width:95%;
        height:65%;
        border-radius:20px;
        display:flex;
        justify-content: space-evenly;
        box-shadow: 15px 30px 10px rgba(50,50,93,.05);
        transition: 1s;
        position:relative;
        h2 {
          margin:0;
          position:absolute;
          bottom:0;
          right:0;
          font-family: 'Lato', sans-serif;
          font-size:150px;
          color: yellow;
          -webkit-text-stroke: 2px black;
        }
        .codeContainer {
            width:35%;


            h1 {
                font-size:60px;
                color: navy;
                font-family: 'Lato', sans-serif;
                span {
                  animation-name:changeColor;
                  animation-duration: 2000ms;
                  animation-iteration-count: infinite;
                  animation-timing-function: linear; 
                }
                @keyframes changeColor {
                  0% {
                      color: navy;
                  }

                  50% {
                      color: rgb(0, 217, 255);
                  }

                  100% {
                      color: navy;
                  }
                }
            }
            .codeSkillsContainer {
                background-color: white;
                border-radius: 20px;
                box-shadow: 15px 30px 10px rgba(50,50,93,.05);
                transition:margin-top 2s cubic-bezier(0,1.11,.63,.86);

                &:hover {
                    margin-top: -15px;
                    box-shadow: 20px 20px 50px rgba(50,50,93,.3);
            }
                
                ul {
                    padding:20px;
                    list-style:none;
                    li {
                        font-family: 'Karla', sans-serif;
                        font-size:16px;
                        line-height:40px;
                        color: rgb(64, 64, 202);
                        display:flex;
                        align-items:center;

                        .moveMeRight {
                          margin-right:10px;
                        }
                    }
                }
            }
        }
    }
    .skillsDiv:hover {
      height:63.5%;
    }
    @media screen and (max-width:1300px){
      .skillsDiv:hover {
        height:80%;
      }
      .skillsDiv h2 {
        font-size:100px;
        transition:1s;
      }
      .skillsDiv .codeContainer .codeSkillsContainer ul li {
        font-size:16px;
      }
    }

    @media screen and (max-width:1150px){
      .skillsDiv h2 {
        font-size:85px;
      }
      .skillsDiv .codeContainer .codeSkillsContainer ul li {
        font-size:12px;
      }
    }
    @media screen and (max-width:850px){
      .skillsDiv {
        height:80%;
      }
      .skillsDiv:hover{
        height:80%;
      }
      .skillsDiv h2 {
        font-size:75px;
      }
    }

    @media screen and (max-width:650px){
      .skillsDiv h2 {
        font-size:70px;
      }
      .skillsDiv .codeContainer h1 {
        font-size:40px;
      }
      .skillsDiv .codeContainer .codeSkillsContainer ul li {
        font-size:10px;
      }
    }
`

const Skills = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div className={skillsContainer}>
      <div className="skillsDiv">
        <div className="codeContainer" data-aos="zoom-in">
          <h1><span>_</span>Code</h1>
          <div className="codeSkillsContainer">
            <ul>
              <li><FontAwesomeIcon icon={faCss3} className="moveMeRight" /> HTML / CSS / Responsive Design</li>
              <li><IoLogoJavascript className="moveMeRight" /> Javascript / JQuery</li>
              <li><FontAwesomeIcon icon={faReact} className="moveMeRight" /> React / React Native</li>
              <li><FontAwesomeIcon icon={faAngular} className="moveMeRight" /> Angular</li>
              <li><FontAwesomeIcon icon={faSellsy} className="moveMeRight" /> Linaria / Emotion</li>
              <li><SiWebpack className="moveMeRight" /> Webpack</li>
              <li><SecurityRoundedIcon className="moveMeRight" /> React Testing Library / Jest / Enzyme</li>
              <li><FontAwesomeIcon icon={faPython} className="moveMeRight" /> Python / Django / Django Rest Framework</li>
              <li><FontAwesomeIcon icon={faPhp} className="moveMeRight" /> PHP / Codeigniter</li>
              <li><FontAwesomeIcon icon={faGithub} className="moveMeRight" /> Git / Github / GitLab</li>
            </ul>
          </div>
        </div>
        <div className="codeContainer" data-aos="zoom-in">
          <h1><span>_</span>Interests</h1>
          <div className="codeSkillsContainer">
            <ul>
              <li><SportsSoccerIcon className="moveMeRight" /> Playing and Watching Soccer</li>
              <li><FlightLandIcon className="moveMeRight" /> Traveling (USA, Spain, Italy, France, ...)</li>
              <li><MenuBookIcon className="moveMeRight" /> Reading (Leadership, Business Related, ...)</li>
              <li><VideogameAssetIcon className="moveMeRight" /> Videogames (Fifa and Warzone are my favorites)</li>
            </ul>
          </div>
        </div>
        <h2 data-aos="fade-up"> *Skills*</h2>
      </div>
    </div>
  )
}

export default Skills
