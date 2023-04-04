import React from 'react'
import "./css/Footer.css"
import githubIcon from "../assets/img/github.svg"
import emailIcon from "../assets/img/envelope-fill.svg"
import linkedinIcon from "../assets/img/linkedin.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='vstack'>

            <div className='hstack  ms-auto' style={{"padding":"30px"}}>
                <div className='vstack gap-3'>

                    <div className='hstack gap-2 ml-auto'>
                        <img src={emailIcon}/>
                        <span>wy91772187@outlook.com</span>
                    </div>

                    <div className='ml-auto'>
                        <a href="https://github.com/err03" 
                            target="_blank" 
                            className='hstack gap-2'
                            style={{"text-decoration":"none", "color":"#adb5bd"}}
                        >
                            <img  src={githubIcon}/>
                            <span className='text-hover'>Github</span>
                        </a>
                    </div>

                    <div className='ml-auto'>
                        <a href="https://www.linkedin.com/in/err03/"
                            target='_blank' 
                            className='hstack gap-2'
                            style={{"text-decoration":"none", "color":"#adb5bd"}}
                        >
                            <img src={linkedinIcon}/>
                            <span className='text-hover'>Linkedin</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className='hstack'>
                <div className='m-auto'>Copyright Weibin Yang</div>
                <div className='m-auto'>Power by: ReactJS, Bootstrap</div>
            </div>

        </div>
    </div>
  )
}

export default Footer