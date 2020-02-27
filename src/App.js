import React from "react";
import { DashBoard } from "./container";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DashBoard />
        </header>
      </div>
    );
  }
}

export default App;
