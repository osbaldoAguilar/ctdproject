import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';      
import shuffle from 'lodash/shuffle';     
// import data from './data';              // may not need
import '../../styles/header.css';

const Header = (props) => {             // header of page
  const projectList = props.projectData.map((project) => {    
    const projectTitles = project.fields.Name.toUpperCase();
    return(
      <li className = 'backgrounds-project-item'>
        <div key = {project.id} 
        onClick = {() => props.selectProject(project.id)}
        className = 'card'>
          <h4 className = 'project-titles'>{projectTitles}</h4>
        </div>
      </li>
    )
  });
  
  console.log('this ', projectList)
  return(
    <ul className = 'container project-list'>
      {projectList}
    </ul>
  )
}



export default Header