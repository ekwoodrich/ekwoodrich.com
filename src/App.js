import React from 'react';
import './App.css';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaCode
} from 'react-icons/fa';
import { IoIosGitBranch } from 'react-icons/io';
function App() {
  return (
    <div className="">
      <h1>Eliot Woodrich</h1>

      <h5 id="schoolInfo">
        B.S. Computer Science at Portland State University
      </h5>
      <h5 id="gradInfo">(expected graduation: June 2020)</h5>
      <div class="buttonLine">
        <a
          class="linkButton"
          href="https://storage.googleapis.com/ekwoodrich/EliotWoodrichLinkedIn.pdf"
        >
          <FaFilePdf /> Resume
        </a>
        <a class="linkButton" href="/portfolio">
          <FaCode /> Projects
        </a>
      </div>
      <div class="linkItem">
        <a class="linkButton" href="https://github.com/ekwoodrich">
          <FaGithub /> Github
        </a>
        <a
          class="linkButton"
          href="https://www.linkedin.com/in/eliot-woodrich-a83459bb"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a class="linkButton" href="mailto:eliot@woodrich.com">
          <FaEnvelope /> Email
        </a>
      </div>
    </div>
  );
}

export default App;
