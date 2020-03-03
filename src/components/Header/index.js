import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../../styles/header.css';
import '../../styles/dashboard.css';

const zoomOutProperties = {
  duration: 9000000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Header = (props) => {
  let projectList = props.projectData;
  console.log('check ', projectList)
  return(
    <div className = 'slide-container'>
      <Zoom {...zoomOutProperties}>
        {
          projectList.map((project) =>
            <li key = {project.id}
                onClick = {() => props.selectProject(project.id)}
                style = {{width: '73%'}}
                className = 'card'>
                {project.fields.Name.toUpperCase()}
            </li>)
        }
      </Zoom>
    </div>
  )
}

 export default Header