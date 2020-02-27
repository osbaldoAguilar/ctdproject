import React from 'react';
import '../../styles/header.css'

const Header = (props) => {
  const projectList = props.projectData.map((project) => {
    return(
      <div key = {project.id} 
      onClick = {() => props.selectProject(project.id)}
      className = 'card'
      style = {{
        fontSize: "15px",
        fontColor: "black"
      }}>
        <p>{project.fields.Name}</p>
      </div>
    )
  });
  console.log('this ', projectList)
  // const projectList = props.projectData.map((project) => project
  // console.log('this ',projectList)
  return(
    <div className = 'container'>
      {projectList}
    </div>
  )
}

export default Header