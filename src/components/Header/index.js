import React from 'react';
import '../../styles/header.css'

const Header = (props) => {             // header of page
  const projectList = props.projectData.map((project) => {    
    const projectTitles = project.fields.Name.toUpperCase();
    return(
      <div className = 'backgrounds'>
        <div key = {project.id} 
        onClick = {() => props.selectProject(project.id)}
        className = 'card'
        style = {{
          fontSize: "15px",
          fontColor: "black"
        }}>
          <p>{projectTitles}</p>
        </div>
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