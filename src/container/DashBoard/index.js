import React from "react";
import { Projects, Blocks } from "../../components";

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
    const projectList = this.state.projectData.map(projectitem => {
      console.log(projectitem.fields.Name);
    });
    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
          <Projects projects={this.state.projectData} />
        </div>
        <br />
        <div>Status</div>
        <br />
        <Blocks projects={this.state.projectData} />
      </div>
    );
  }
}

export default DashBoard;
