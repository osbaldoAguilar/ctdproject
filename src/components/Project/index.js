import React from "react";

const Project = props => {
  const { project } = props;
  return <div className="project">{project.Name}</div>;
};

export default Project;
