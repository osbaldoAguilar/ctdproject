import React from "react";
// import logo from "./logo.svg";
import { DashBoard } from "./container";
// import ReactDom from "react-dom";
// import Modal from "react-modal";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <header className = 'App-header'>
          <DashBoard />        
        </header>
      </div>
    )
  }
}
export default App;
