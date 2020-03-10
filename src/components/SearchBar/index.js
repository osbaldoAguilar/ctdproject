import React from 'react';
import '../../styles/searchbar.scss';
// import SideBarOpen from '../SideBarOpen';

const SearchBar = (props) => {
  const searchProjectButton = props.projectData;
  console.log('it\'s friday ', searchProjectButton)
  searchProjectButton.map((searchButton) => {
    return searchButton.fields.Name;
  })
  return(
  <div className = 'searchbar-container'>
    <input onChange={props.handleInput} type = 'text' /> 
    <div className = 'search' onClick = {() => props.selectProject} type = 'search' />  
  </div>
  )
}
      
export default SearchBar
        
    
  
 