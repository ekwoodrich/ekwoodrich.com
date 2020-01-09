import React from 'react';
import ProjectItem from '../components/ProjectItem';

function ProjectsScreen(props) {
  return (
    <div>
      <h3>Projects</h3>
      <ProjectItem
        name="istoria.io"
        url="https://istoria.io"
        techList={[
          ['UI', 'Material UI'],
          ['Framework', 'React'],
          ['Hosting', 'Firebase'],
          ['DB', 'Firestore'],
          ['Tools', 'Git/Husky/ Yarn'],
          ['APIs', 'Mailgun']
        ]}
      />
    </div>
  );
}

export default ProjectsScreen;
