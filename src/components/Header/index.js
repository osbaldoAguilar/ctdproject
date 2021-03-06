import React from "react";

const Header = props => {
  const projectList = props.projectData.map(project => {
    return (
      <div key={project.id} onClick={() => props.selectProject(project.id)}>
        <h3>{project.fields.Name}</h3>
      </div>
    );
  });
  console.log("this ", projectList);
  // const projectList = props.projectData.map((project) => project
  // console.log('this ',projectList)
  return <ul>{projectList}</ul>;
};

export default Header;
