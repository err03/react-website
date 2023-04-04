import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/HomePage.css";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";


const HomePage = () => {

  const [projectCards, setProjectCards] = useState([
    {
      title: "SWIPS",
      description: "This is description",
      imagesSrc: "imageSrc",
      coverImageSrc:"",
      figmaLink:"",
    },
    {
      title: "Pihu",
      description: "This is description",
      imagesSrc: "imageSrc",
      coverImageSrc:"",
      figmaLink:"https://www.figma.com/file/5m5rVFlf5LLHImyKSKF7Q5/%E5%BD%BC%E5%91%BC?node-id=2%3A4&t=e7zTrq87rpxnZcKR-1",
    },
  ]);

  return (
    <div>
      <Header />

      <div className="home-content-container">
        <AboutMe />
        {/* Project section */}
        <Project title={"Project"} cards={projectCards}/>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
