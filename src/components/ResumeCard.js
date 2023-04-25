import React, { useState } from 'react'
import coverImage from "../assets/img/cover-image-portrait.png";
import "../assets/css/globalStyle.css"

function ResumeCard({id, props}) {

  return (
    <div id={id}>
        <div className="card mb-3" style={{"width": "16rem", "height":"25rem"}}>
            <div className="card-body img-grow">
                <a href={props.pdfSrc} target='_blank'>
                    <img src={props.imgSrc} className="card-text" alt="..." style={{"width": "13.5rem", "height":"23rem"}}/>
                </a>
            </div>
        </div>
        <p className='form-text'>Version {props.version}</p>
    </div>
  )
}

export default ResumeCard