import React from 'react';
import AliceCarousel from 'react-alice-carousel';
// import { render } from 'react-dom';      // may not need 
// import shuffle from 'lodash/shuffle';      // may not need
// import data from './data';              // may not need
import '../../styles/header.css'
const ContentHeader = (props) => {
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
  })
}
class Header extends React.Component {
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }
  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
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
    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <h4><ContentHeader 
              projectList = {this.props.projectList}
              />
              </h4>
      </AliceCarousel>
    );
  }
}
export default Header