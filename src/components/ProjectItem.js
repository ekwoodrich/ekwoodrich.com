import React, { Component } from 'react';

function ProjectItem({ name, description, url, gitUrl, techList }) {
  const projectTechItems = techList.map(val => (
    <div className="projectTechItem">
      <div className="projectTechItemDesc">{val[0]}</div>
      <div className="projectTechItemName">{val[1]}</div>
    </div>
  ));
  return (
    <div className="projectItemContainer">
      <a className="projectItemName" href={url}>
        {name}
      </a>
      <div className="projectItemBox">
        <p>{description}</p>
        <div className="projectTechBox">{projectTechItems}</div>
      </div>
    </div>
  );
}

export default ProjectItem;
