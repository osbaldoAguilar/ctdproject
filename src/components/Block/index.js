import React from "react";

const Block = props => {
  const { project } = props;
  console.log("External: ", project.External);
  const External = project.External;
  //   if (External === undefined) {
  //     this.setState({
  //       External: false
  //     });
  //   }
  return (
    <div className="modal">
      <div class="project">Project Title: {project.Name}</div>
      {project.Front_Ends && (
        <div class="project">Front End: {project.Front_Ends}</div>
      )}
      {project.Rails_Devs && (
        <div class="project">Rails Devs: {project.Rails_Devs}</div>
      )}
      {project.Current_Team && (
        <div class="project">Current Team: {project.Current_Team}</div>
      )}
      {project.Status && <div class="project">Stauts: {project.Status}</div>}
      {project.Type && <div class="project">Type: {project.Type}</div>}
      {project.External && <div class="project">External: {External}</div>}
      {project.Repo && <div class="project">Repo: {project.Repo}</div>}
      {project.Notes && <div class="project">Notes: {project.Notes}</div>}
      {project.Meeting_Time && (
        <div class="project">Meeting Time:{project.Meeting_Time}</div>
      )}
      {project.Project_Description && (
        <div class="project">
          Project Description: {project.Project_Description}
        </div>
      )}
      {project.Website && <div class="project">Website: {project.Website}</div>}
    </div>
  );
};

export default Block;
