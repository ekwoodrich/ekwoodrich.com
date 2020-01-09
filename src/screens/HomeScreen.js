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

function HomeScreen(props) {
  return (
    <div className="">
      <h1>Eliot Woodrich</h1>
      <h5 id="schoolInfo">Full Stack Developer</h5>
      <div class="buttonLine">
        <LinkButton url="https://storage.googleapis.com/ekwoodrich/EliotWoodrichLinkedIn.pdf">
          <FaGithub /> Resume
        </LinkButton>
        <Link className="linkButton" to="/projects">
          <FaCode /> Projects
        </Link>
      </div>
      <div class="linkItem">
        <LinkButton url="https://github.com/ekwoodrich">
          <FaGithub /> Github
        </LinkButton>
        <LinkButton url="https://www.linkedin.com/in/eliot-woodrich-a83459bb">
          <FaLinkedin /> LinkedIn
        </LinkButton>
        <LinkButton url="mailto:ekwoodrich@gmail.com">
          <FaEnvelope /> Email{' '}
        </LinkButton>
      </div>
      <ProjectsScreen />
    </div>
  );
}

export default HomeScreen;
