import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaCode
} from 'react-icons/fa';
import { IoIosGitBranch } from 'react-icons/io';
import LinkButton from '../components/LinkButton';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import ProjectsScreen from './ProjectsScreen';
import Footer from '../components/Footer';

function HomeScreen(props) {
  return (
    <div>
      <div className="">
        <h1>Eliot Woodrich</h1>
        <h5 id="schoolInfo">Full Stack Developer</h5>
        <div class="buttonLine">
          <LinkButton url="https://storage.cloud.google.com/ekwoodrich/EliotWoodrichResume012020.pdf">
            <FaGithub /> Resume
          </LinkButton>
        </div>
        <div class="">
          <div class="linkItem">
            <LinkButton url="https://github.com/ekwoodrich">
              <FaGithub /> Github
            </LinkButton>
            <LinkButton url="https://www.linkedin.com/in/eliot-woodrich-a83459bb">
              <FaLinkedin /> LinkedIn
            </LinkButton>
            <LinkButton url="mailto:ekwoodrich@gmail.com">
              <FaEnvelope /> Email
            </LinkButton>
          </div>
        </div>
        <ProjectsScreen />
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
