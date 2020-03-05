import React from "react";

const Header = props => {
  const dummyList = props.projectData;
  console.log("dummy", dummyList);
  const probableList = dummyList.filter(
    listItem => listItem.fields.Status !== "Probable"
  );
  const filterList = probableList.filter(
    listItem => listItem.fields.Status !== "Complete"
  );
  console.log("filterList", filterList);
  const List = filterList.map(project => {
    return (
      <div key={project.id} onClick={() => props.selectProject(project.id)}>
        <h3>{project.fields.Name}</h3>
      </div>
    );
  });
  // console.log("this ", projectList);
  // const projectList = props.projectData.map((project) => project
  // console.log('this ',projectList)
  return <ul>{List}</ul>;
};

export default Header;
