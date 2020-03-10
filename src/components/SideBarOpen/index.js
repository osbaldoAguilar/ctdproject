import React from 'react';
import OpenClose from '../../components/OpenClose'
import SearchBar from '../SearchBar';
import '../../styles/side-menu.css'

const SideBarOpen = (props) => {
  let sideBarMenu = props.filterProject
  console.log('check for today\'s ', sideBarMenu)
  return(
    <div className = 'sidebar-menu'>
      <div className = 'btn-home'>
        <OpenClose />
        {/* <SearchBar /> */}
      </div>
      {sideBarMenu.map((sideBar) => 
      <li key = {sideBar.fields.Name}
      onClick = {() => props.selectProject(sideBar.id)}
      className = 'menu-container'>
        {sideBar.fields.Name.toUpperCase()}
      </li> )}
    </div>
  )
}

export default SideBarOpen