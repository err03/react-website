import React, { useState } from "react";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/HomePage.css";
import AboutMe from "../components/AboutMe";

const HomePage = () => {

  const [cards, setCards] = useState([
    {
      title: "SWIPS",
      description: "This is description",
      imagesSrc: "imageSrc",
      coverImageSrc:""
    },
    {
      title: "Pihu",
      description: "This is description",
      imagesSrc: "imageSrc",
      coverImageSrc:""
    },
  ]);

  return (
    <div>
      <Header />

      <AboutMe />

      {/* Project section */}
      <div className="home-content-container">
        <h3>Project</h3>
        <div className="hstack gap-5">
          {cards.map((item, index) => (
            <Card key={item.title} {...item}/>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
