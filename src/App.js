import React from 'react';
import './App.css';

function App() {
  return (
    <div className="">
      <h1>Eliot Woodrich</h1>
      <h5>B.S. Computer Science at Portland State University</h5>
      <h5>(expected graduation: June 2020)</h5>
      <div>
        <a href="https://storage.googleapis.com/ekwoodrich/EliotWoodrichLinkedIn.pdf">
          Resume/CV
        </a>{' '}
        &#183;&nbsp;
        <a href="/portfolio">Projects</a>
      </div>
      <div class="linkItem">
        <a href="https://github.com/ekwoodrich">Github</a> &#183;&nbsp;
        <a href="https://www.linkedin.com/in/eliot-woodrich-a83459bb">
          LinkedIn
        </a>
        &nbsp;&#183;&nbsp;
        <a href="mailto:eliot@woodrich.com">Email</a>
      </div>
    </div>
  );
}

export default App;
