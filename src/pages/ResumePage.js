import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ResumeCard from '../components/ResumeCard'

const ResumePage = () => {
const [resumes, setResumes] = useState([
  {
    version:"5",
    imgSrc: "",
  },
  {
    version:"4",
    imgSrc: "",
  },
  {
    version:"3",
    imgSrc: "",
  },
  {
    version:"2",
    imgSrc: "",
  },
  {
    version:"1",
    imgSrc: "",
  },
])

  return (
    <div>
        <Header />
        <h1>Resume</h1>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <ul className="nav nav-pills">

            {resumes.map( (item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={"#resume"+item.version}>Version {item.version}</a>
              </li>
            ))}

          </ul>
        </nav>
        <div 
          style={{"overflowX":"auto", "scrollBehavior":"smooth"}} 
          data-bs-spy="scroll" 
          data-bs-target="#navbar-example2" 
          data-bs-root-margin="0px 0px -40%" 
          className="hstack gap-5 scrollspy-example bg-body-tertiary p-3 rounded-2" 
          tabIndex="0"
        >
          {resumes.map( (item, index) => (
              <ResumeCard key={index} id={"resume" + item.version}/>
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default ResumePage