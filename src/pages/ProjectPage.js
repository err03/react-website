import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import coverImage from "../assets/img/cover-image.png";
import "./css/ProjectPage.css";
import "../assets/css/globalStyle.css"
import { useLocation } from "react-router-dom";

const ProjectPage = () => {
  const propsData = useLocation().state

  return (
    <div>
        <Header />

        <div className='project-content-container'>
          <h1>{propsData.infos.title}</h1>
          
          {
            propsData.infos.figmaLink !== "" && 
            <a href={propsData.infos.figmaLink} target='_blank'>Figma Link</a>
          }

          <p>This is description</p>
          <div className="row img-grow">
              <img src={coverImage} className="col-sm-auto" alt="..." style={{"width": "23rem", "height":"13.5rem", "padding":"10px"}} onClick={(event) => console.log("ABC")}/>
              <img src={coverImage} className="col-sm-auto" alt="..." style={{"width": "23rem", "height":"13.5rem", "padding":"10px"}} onClick={(event) => console.log("ABC")}/>
              <img src={coverImage} className="col-sm-auto" alt="..." style={{"width": "23rem", "height":"13.5rem", "padding":"10px"}} onClick={(event) => console.log("ABC")}/>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default ProjectPage