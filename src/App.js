import React from "react";
import { ProjectDashBoard } from "./container";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProjectDashBoard />
        </header>
      </div>
    );
  }
}

export default App;
