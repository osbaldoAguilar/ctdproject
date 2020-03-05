import React from 'react';
// import SideBarOpen from '../SideBarOpen';

const SearchBar = (props) => {
  
 
  return(
    <div>
      <form>
        <label>
          Search:
          <input onChange={props.handleInput} type = 'text' /> 
        </label>
          <input type = 'submit' />
      
      </form>
    </div>
  )
}

export default SearchBar