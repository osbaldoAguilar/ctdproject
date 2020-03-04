import React from "react";
import { DashBoard, AddMenu } from "./container";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddMenu />
          <DashBoard />
        </header>
      </div>
    );
  }
}

export default App;
