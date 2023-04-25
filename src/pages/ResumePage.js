import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ResumeCard from '../components/ResumeCard'

const ResumePage = () => {
const [resumes, setResumes] = useState([
  {
    version:"5.1",
    pdfSrc: require('../assets/resumes/v5.1.pdf'),
    imgSrc: require('../assets/resumes/v5.1.png'),
  },
  {
    version:"5",
    pdfSrc: require('../assets/resumes/v5.pdf'),
    imgSrc: require('../assets/resumes/v5.png'),
  },
  {
    version:"4",
    pdfSrc: require('../assets/resumes/v4.pdf'),
    imgSrc: require('../assets/resumes/v4.png'),
  },
  {
    version:"3",
    pdfSrc: require('../assets/resumes/v3.pdf'),
    imgSrc: require('../assets/resumes/v3.png'),
  },
  {
    version:"2",
    pdfSrc: require('../assets/resumes/v2.pdf'),
    imgSrc: require('../assets/resumes/v2.png'),
  },
  {
    version:"1",
    pdfSrc: require('../assets/resumes/v1.pdf'),
    imgSrc: require('../assets/resumes/v1.png'),
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
              <ResumeCard key={index} id={"resume" + item.version} props={item}/>
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default ResumePage