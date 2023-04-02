import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import coverImage from "../assets/cover-image.png";
import { useLocation } from "react-router-dom";

const ProjectPage = () => {
  const propsData = useLocation().state
  return (
    <div>
        <Header />

        <h1>{propsData.title}</h1>
        <a href="#">Figma Link</a>
        <p>This is description</p>
        <div className="vstack gap-5">
            <img src={coverImage} className="card-text" alt="..." style={{"width": "23rem", "height":"13.5rem"}} onClick={(event) => console.log("ABC")}/>
            <img src={coverImage} className="card-text" alt="..." style={{"width": "23rem", "height":"13.5rem"}} onClick={(event) => console.log("ABC")}/>
            <img src={coverImage} className="card-text" alt="..." style={{"width": "23rem", "height":"13.5rem"}} onClick={(event) => console.log("ABC")}/>
        </div>

        <Footer />
    </div>
  )
}

export default ProjectPage