import React from "react";
import logo from "../../components/styles/images/logo.png";
import { Block, Header } from "../../components";
import axios from "axios";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: []
    };
  }
  componentDidMount() {
    this.getAirTable();
  }

  selectProject = id => {
    const allProjects = this.state.projectData;
    console.log("see", id);
    const selectedProject = allProjects.find(x => x.id === id);
    console.log(selectedProject);
    this.setState({
      selectedProject
    });
  };

  getAirTable = async () => {
    const url = `https://api.airtable.com/v0/appQSPi3XUdUMbM1m/Projects?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`;

    try {
      const response = await axios(url);
      console.log("get response", response);
      const projectData = response.data.records;
      this.setState({
        projectData
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
          {this.state.projectData && (
            <Header
              projectData={this.state.projectData}
              selectProject={this.selectProject}
            />
          )}
          {this.state.selectedProject ? (
            <Block project={this.state.selectedProject} />
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}
        </div>
      </div>
    );
  }
}

export default DashBoard;
