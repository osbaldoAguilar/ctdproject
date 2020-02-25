import React from "react";
import Project from "../Project";

const Projects = props => {
  const { projects } = props;
  console.log("projects: ", projects);
  //   const projectList = projects.map(projectItem => {
  //     console.log(projectItem.fields.Name);
  //   });
  const list = projects.map(projectItem => {
    return <Project project={projectItem.fields} key={projectItem.id} />;
  });
  return (
    <div>
      HELLO
      {list}
    </div>
  );
};
export default Projects;
