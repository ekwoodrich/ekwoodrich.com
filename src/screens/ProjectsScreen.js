import React from 'react';
import ProjectItem from '../components/ProjectItem';

function ProjectsScreen(props) {
  return (
    <div>
      {/* <h3 className="projectsHeading">Portfolio</h3> */}

      <div className="projectBox">
        <ProjectItem
          name="ThinkWithin"
          description="Task management/notetaking app with cross-platform support for Android/iOS."
          url="https://github.com/ekwoodrich/thinkwithin"
          gitUrl="https://github.com/ekwoodrich/thinkwithin"
          techList={[
            ['Language', 'JavaScript (ES6+)'],
            ['Framework', 'React Native'],
            ['UI', 'React Native Paper'],
            ['Hosting', 'Firebase'],
            ['DB', 'Cloud Firestore'],
            ['Tools', 'Git/Husky/ Yarn/npm'],
            ['APIs', 'Mailgun'],
            ['Microservice', 'Cloud Functions']
          ]}
        />
        <ProjectItem
          name="istoria.io"
          description="Web platform for collaboration, editing and feedback focused on creative writing."
          url="https://istoria.io"
          techList={[
            ['Language', 'JavaScript (ES6+)'],
            ['Framework', 'React'],
            ['UI', 'Material UI'],
            ['Hosting', 'Firebase'],
            ['DB', 'Cloud Firestore'],
            ['Tools', 'Git/Husky/ Yarn/npm'],
            ['APIs', 'Mailgun'],
            ['Microservice', 'Cloud Functions']
          ]}
        />
        <ProjectItem
          name="python-netsurv"
          description="Python library for configuring a wide range of IP cameras which use the NETsurveillance ActiveX plugin. Available on PyPI."
          url="https://github.com/sofia-netsurv/python-netsurv/blob/master/netsurv/dvrip.py"
          techList={[
            ['Language', 'Python 3'],
            ['Tools', 'Git/Husky/ pip'],
            ['Reverse Engineering', 'Wireshark'],
            ['Repository', 'PyPI']
          ]}
        />

        <ProjectItem
          name="KindLit"
          description="Web app to simplify sending PDF and MOBI files to a Kindle device."
          url="https://kindlit.app"
          techList={[
            ['Language', 'Javascript (ES6+)'],
            ['Framework', 'React'],
            ['Tools', 'Git'],
            ['APIs', 'Mailgun'],
            ['Microservice', 'Cloud Functions']
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsScreen;
