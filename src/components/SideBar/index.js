import React from 'react';
import OpenClose from '../../components/OpenClose'
import '../../styles/side-menu.css'

const SideBar = (props) => {
  let sideBarMenu = props.projectData
  // console.log('check for today\'s ', sideBarMenu)
  return(
    <div className = 'sidebar-menu'>
      <div className = 'btn-home'>
        <OpenClose />
      </div>
      {sideBarMenu.map((sideBar) => 
      <li key = {sideBar.id}
      onClick = {() => props.selectProject(sideBar.id)}
      className = 'menu-container'>
        {sideBar.fields.Name.toUpperCase()}
      </li> )}
    </div>
  )
}



export default SideBar