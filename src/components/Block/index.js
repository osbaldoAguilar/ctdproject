import React from "react";

const Block = props => {
  const { project } = props;
  console.log("WHAT", project);
  console.log("Name of the project selected: ", project.fields.Name);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-content">
            <div>Name of the Project</div>
            <div className="card-text">{project.fields.Name}</div>
          </div>
          {/* <img src="../Styles/images/ctd.jpg" /> */}
        </div>
        <div className="flip-card-back">
          <div className="card-content-back">Project Title</div>
          <div className="card-text">{project.fields.Name}</div>
          {/* {project.fields.Front_Ends && (
            <div>Front End: {project.fields.Front_Ends}</div>
          )} */}
          {/* {project.fields.Rails_Devs && (
            <div>Rails Devs: {project.fields.Rails_Devs}</div>
          )} */}
          {project.fields.Current_Team && (
            <div className="block-content-container">
              <div className="card-content-back">Current Team</div>
              <div className="card-text">{project.fields.Current_Team}</div>
            </div>
          )}
          {project.fields.Status && (
            <div className="block-content-container">
              <div className="card-content-back">Stauts</div>
              <div className="card-text">{project.fields.Status}</div>
            </div>
          )}
          {project.fields.Type && (
            <div className="block-content-container">
              <div className="card-content-back">Type</div>
              <div className="card-text">{project.fields.Type}</div>
            </div>
          )}
          {/* {project.fields.External && <div>External{External}</div>} */}
          {project.fields.Repo && (
            <div className="block-content-container">
              <div className="card-content-back">Repo</div>
              <div className="card-text">{project.fields.Repo}</div>
            </div>
          )}
          {project.fields.Notes && (
            <div className="block-content-container">
              <div className="card-content-back">Notes</div>
              <div className="card-text">{project.fields.Notes}</div>
            </div>
          )}
          {project.fields.Meeting_Time && (
            <div className="block-content-container">
              <div className="card-content-back">Meeting Time</div>
              <div className="card-text">{project.fields.Meeting_Time}</div>
            </div>
          )}
          {project.fields.Project_Description && (
            <div className="block-content-container">
              <div className="card-content-back">Project Description</div>
              <div className="card-text">
                {project.fields.Project_Description}
              </div>
            </div>
          )}
          {project.fields.Website && (
            <div className="block-content-container">
              <div className="card-content-back">Website</div>
              <div className="card-text">{project.fields.Website}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
