import React from "react";
import SideBarOpen from '../../components/SideBarOpen'
import logo from "../../components/styles/images/logo.png";
import { FeatureCard, Header } from "../../components";
import SearchBar from "../../components/SearchBar";

class ProjectDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [],
      searchName: ''
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

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({
      searchName: e.target.value
    })
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
    // Filtering out the side bar Menu
    let filterProject = this.state.projectData.filter((sideBarFilter) => {
      return sideBarFilter.fields.Name.toUpperCase().includes(this.state.searchName.toUpperCase());
    })

    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
        <div>
          {this.state.projectData && (
            <Header
              projectData={this.state.projectData}
              selectProject={this.selectProject}
            />
          )}

          {this.state.projectData && (<SearchBar 
            projectData={this.state.projectData}
            selectProject={this.selectProject}
            handleInput={this.handleInput}
          />)}    
             
          
        </div>
          
          {this.state.selectedProject ? 
            <FeatureCard project={this.state.selectedProject} /> : null }
          
          {this.state.projectData && <SideBarOpen
            projectData = {this.state.projectData}
            selectProject = {this.selectProject}
            filterProject = {filterProject}
        /> }
        </div>
         
        {/* {this.state.projectData && <Header 
        projectData = {this.state.projectData}
        selectProject = {this.selectProject}
      />  } */}
      </div>
    );
  }
}

export default ProjectDashBoard;

  


