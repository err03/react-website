import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';import ResumePage from './pages/ResumePage';


function App() {
  return (
    <Router basename='react-website'>
      <Routes>
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project/:id" element={<ProjectPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
