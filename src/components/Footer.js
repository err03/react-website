import React from 'react'
import "./css/Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='vstack'>

            <div className='hstack' style={{"padding":"10px"}}>
                <div className='vstack'></div>
                <div className='vstack'></div>
                <div className='vstack'>
                    <div className='m-auto'>wy91772187@outlook.com</div>
                    <div className='m-auto'>github.com</div>
                    <div className='m-auto'>linkedin</div>
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