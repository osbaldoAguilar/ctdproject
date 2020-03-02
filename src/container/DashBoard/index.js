import React from "react";
import logo from "../../components/styles/images/logo.png";
import { Block, Header } from "../../components";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: []
      // selectedProject: {}
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

  getAirTable() {
    const url = "https://api.airtable.com/v0/appQSPi3XUdUMbM1m/Projects";

    fetch(url, {
      headers: { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
    })
      .then(response => response.json())
      .then(responseData => {
        console.log("data from Airtable", responseData);
        const projectData = responseData.records;
        console.log("projectData ", projectData);
        this.setState({ projectData: projectData });
      });
  }

  render() {
    // const projectList = this.state.projectData.map(projectitem => {
    //   console.log(projectitem.fields.Name);
    // });
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
