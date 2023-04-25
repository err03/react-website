import React, { useState } from 'react'
import "./css/Footer.css"
import githubIcon from "../assets/img/github.svg"
import emailIcon from "../assets/img/envelope-fill.svg"
import linkedinIcon from "../assets/img/linkedin.svg"
import clipboardIcon from "../assets/img/clipboard.svg"
import checkIcon from "../assets/img/check-lg.svg"

const Footer = () => {
    const [clipActive, setClipActive] = useState(false)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const clickClipboard = async () => {
        setClipActive(true)
        await delay(2000)
        setClipActive(false)
    }

  return (
    <div className='footer-container'>
        <div className='vstack'>

            <div className='hstack  ms-auto' style={{"padding":"30px"}}>
                <div className='vstack gap-3'>

                    <div className='hstack gap-2 ml-auto'>
                        <img src={emailIcon}/>
                        <span>bingyang038@gmail.com</span>
                        <img src={clipActive ? checkIcon : clipboardIcon}
                            onClick={clickClipboard}
                        />
                    </div>

                    <div className='ml-auto'>
                        <a href="https://github.com/err03" 
                            target="_blank" 
                            className='hstack gap-2'
                            style={{"textDecoration":"none", "color":"#adb5bd"}}
                        >
                            <img  src={githubIcon}/>
                            <span className='text-hover'>Github</span>
                        </a>
                    </div>

                    <div className='ml-auto'>
                        <a href="https://www.linkedin.com/in/err03/"
                            target='_blank' 
                            className='hstack gap-2'
                            style={{"textDecoration":"none", "color":"#adb5bd"}}
                        >
                            <img src={linkedinIcon}/>
                            <span className='text-hover'>Linkedin</span>
                        </a>
                    </div>

                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                        <img src="..." class="rounded me-2" alt="..."/>
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                        Hello, world! This is a toast message.
                        </div>
                    </div>
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