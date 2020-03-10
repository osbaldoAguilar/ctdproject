import React from 'react';
import '../../styles/button.css';
// import SideBar from '../../components/SideBar'

class OpenClose extends React.Component {
  state = {
    isOpen: false,
    toggle: false
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log('hello ', this.state.isOpen)
    let openSlider = !this.state.isOpen;
    console.log('bernie ', openSlider)
    if(openSlider === true) {
      console.log('Hello, Nick')
    }
  }
// changes the hamburger button 
  buttonChangeOnClick = (x) => {
    x.classList.toggle('change');
  }
    
  // handleClose = () => {
  //   this.setState({
  //     isOpen: false
  //   })
  // }

  render() {
    return(
      <div className = 'button-container' onClick = {this.handleOpen}>
        {/* <button onClick = {this.handleOpen}>test</button> */}
        <div className = "bar1"></div>
        <div className = "bar2"></div>
        <div className = "bar3"></div>
      </div>
    )
  }
}

export default OpenClose
  

      
    
    
