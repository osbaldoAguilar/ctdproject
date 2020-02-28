import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import { render } from 'react-dom';      // may not need 
// import shuffle from 'lodash/shuffle';      // may not need
// import data from './data';              // may not need
import '../../styles/header.css';

const Header = (props) => { 
  
  onSlideChange(e) ({
    console.log('position during a change: ', e.item);
    console.log('Slide\'s position during a change: ', e.slide);
  })

  onSlideChanged(e) {
    console.log('position during a change: ', e.item);
    console.log('Slide\'s position during a change: ', e.slide); 
  }
  renderThumbs = () =>
  <ul>
    {
      [1, 2, 3, 4, 5].map((item, i) =>
        <li key = {i} onClick = {() => this.Carousel._onDotClick(i) }> Thumb {item}></li>)
    }
  </ul>
             // header of page
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
    <AliceCarousel className = 'container project-list'>
      {projectList}
    </AliceCarousel>
  )
}

class Gallery extends React.Component {

  onSlideChange(e) {
    console.log('position during a change: ', e.item);
    console.log('Slide\'s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('position during a change: ', e.item);
    console.log('Slide\'s position during a change: ', e.slide); 
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    
    return(
      <AliceCarousel
        duration = {400}
        autoPlay = {true}
        startIndex = {1}
        fadeOutAnimation = {true}
        mouseDragEnabled = {true}
        playButtonEnabled = {true}
        responsive = {responsive}
        autoPlayInterval = {2000}
        autoPlayDirection = 'rtl'
        autoPlayActionDisabled = {true}
        onSlideChange = {this.onSlideChange}
        onSlideChanged = {this.onSlideChanged}
        >
          <h4>{projectList}</h4>
        </AliceCarousel>
    )
  }
}

export default Header