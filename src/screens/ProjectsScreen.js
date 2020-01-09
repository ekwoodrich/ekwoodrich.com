import React from 'react';
import ProjectItem from '../components/ProjectItem';

function ProjectsScreen(props) {
  return (
    <div>
      <h3 className="projectsHeading">Projects</h3>
      <ProjectItem
        name="ThinkWithin"
        description="Life management and notetaking app with cross-platform support for Android/iOS "
        url="https://github.com/ekwoodrich/thinkwithin"
        gitUrl="https://github.com/ekwoodrich/thinkwithin"
        techList={[
          ['Framework', 'React'],
          ['UI', 'React Native Paper'],
          ['Hosting', 'Firebase'],
          ['DB', 'Firestore'],
          ['Tools', 'Git/Husky/ Yarn'],
          ['APIs', 'Mailgun']
        ]}
      />
      <ProjectItem
        name="istoria.io"
        description="Web platform for collaboration, editing and feedback focused on creative writing."
        url="https://istoria.io"
        techList={[
          ['Framework', 'React'],
          ['UI', 'Material UI'],
          ['Hosting', 'Firebase'],
          ['DB', 'Firestore'],
          ['Tools', 'Git/Husky/ Yarn'],
          ['APIs', 'Mailgun']
        ]}
      />
      <ProjectItem
        name="python-netsurv"
        description="Python library for configuring a wide range of IP cameras which use the NETsurveillance ActiveX plugin. Available on PyPI."
        url="https://github.com/sofia-netsurv/python-netsurv/blob/master/netsurv/dvrip.py"
        techList={[
          ['Language', 'Python 3'],
          ['Tools', 'Git/Husky/ pip'],
          ['Reverse Engineering', 'Wireshark']
        ]}
      />
    </div>
  );
}

export default ProjectsScreen;
