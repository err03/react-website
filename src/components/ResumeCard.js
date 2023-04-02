import React from 'react'
import coverImage from "../assets/cover-image-portrait.png";

function ResumeCard({id}) {
    const hrefLink = () => {

    }

  return (
    <div id={id}>
        <div className="card mb-3" style={{"width": "16rem", "height":"25rem"}}>
            <div className="card-body">
                <a href={coverImage} target='_blank'>
                    <img src={coverImage} className="card-text" alt="..." style={{"width": "13.5rem", "height":"23rem"}} onClick={(event) => console.log("ABC")}/>
                </a>
            </div>
        </div>
        <p className='form-text'>Version 5</p>
    </div>
  )
}

export default ResumeCard