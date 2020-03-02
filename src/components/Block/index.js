import React from "react";
import logo from "../styles/images/logo.png";
import ctdlogo from "../styles/images/ctdlogo.png";
import ctd from "../styles/images/ctd-labs-horiz.png";

const Block = props => {
  const { project } = props;
  // console.log("WHAT", project);
  // console.log("Name of the project selected: ", project.fields.Name);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-content">
            <h2 className="card-title">{project.fields.Name}</h2>
          </div>
          <img src={ctdlogo} id="card-logo" />
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            {/* <h4 className="card-title" id="top">
              Project Title
            </h4> */}
            <div className="scroll-tip">
              <img
                src={ctd}
                id="card-logo-title"
                // className="App-logo"
                alt="logo"
              />
              <div className="scroll-tip-text">
                Card is scrollable depending on size of content
              </div>
            </div>
            <h3 className="card-title">{project.fields.Name}</h3>

            {/* {project.fields.Front_Ends && (
            <div>Front End: {project.fields.Front_Ends}</div>
          )} */}
            {/* {project.fields.Rails_Devs && (
            <div>Rails Devs: {project.fields.Rails_Devs}</div>
          )} */}
            {project.fields.Current_Team && (
              <div className="block-content-container">
                <h4 className="card-title">Current Team</h4>
                <h5 className="card-text">{project.fields.Current_Team}</h5>
              </div>
            )}
            {project.fields.Status && (
              <div className="block-content-container">
                <h4 className="card-title">Stauts</h4>
                <h5 className="card-text">{project.fields.Status}</h5>
              </div>
            )}
            {project.fields.Type && (
              <div className="block-content-container">
                <h4 className="card-title">Type</h4>
                <h5 className="card-text">{project.fields.Type}</h5>
              </div>
            )}
            {/* {project.fields.External && <div>External{External}</div>} */}
            {project.fields.Repo && (
              <div className="block-content-container">
                <h4 className="card-title">Repo</h4>
                <h5 className="card-text">{project.fields.Repo}</h5>
              </div>
            )}
            {project.fields.Notes && (
              <div className="block-content-container">
                <h4 className="card-title">Notes</h4>
                <h5 className="card-text">{project.fields.Notes}</h5>
              </div>
            )}
            {project.fields.Meeting_Time && (
              <div className="block-content-container">
                <h4 className="card-title">Meeting Time</h4>
                <h5 className="card-text">{project.fields.Meeting_Time}</h5>
              </div>
            )}
            {project.fields.Project_Description && (
              <div className="block-content-container">
                <h4 className="card-title">Project Description</h4>
                <h5 className="card-text">
                  {project.fields.Project_Description}
                </h5>
              </div>
            )}
            {project.fields.Website && (
              <div className="block-content-container">
                <h4 className="card-title">Website</h4>
                <h5 className="card-text">{project.fields.Website}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
