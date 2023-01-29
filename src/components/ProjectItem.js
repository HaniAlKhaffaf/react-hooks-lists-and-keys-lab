import React from "react";

function Tech(props){
  return <span key={props.index}>{props.tech}</span>
}

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => <Tech index = {index} tech = {tech}/>)}
      </div>
    </div>
  );
}

export default ProjectItem;
