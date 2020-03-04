// import React from "react";

// class AddMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", status: "" };

//     this.handleName = this.handleName.bind(this);
//     this.handleStatus = this.handleStatus.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleName(event) {
//     const value = event.target.value;
//     this.setState({ [event.target.value]: value });
//   }

//   handleStatus(event) {
//     this.setState({ status: event.target.vaule });
//   }

//   handleSubmit(event) {
//     console.log("A name was submitted: " + this.state.name);
//     console.log("Status:", this.state.status);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleName}
//           />
//         </label>
//         <label>
//           Status:
//           <input
//             type="text"
//             value={this.state.status}
//             onChange={this.handleName}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default AddMenu;

import React from "react";
// import Form from "../../components/Form/index";

export default class AddMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      feilds: {
        Name: ""
      }

      //   userData: {}
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   componentDidMount() {
  //     this.push2AirTable();
  //   }

  push2AirTable() {
    let userData = {
      fields: {
        Name: this.state.Name
        // Status: this.state.status,
        // Current_Team: this.state.team
      }
    };

    const url = "https://api.airtable.com/v0/appQSPi3XUdUMbM1m/Projects";

    fetch(url, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY
        // Accept: "application/json"
      },
      method: "POST",
      body: userData
    })
      .then(response => response.json())
      .then(responseData => {
        console.log("push2: ", responseData);
        // const formData = responseData.records;
        // console.log("formData ", formData);
        // this.setState({ formData: formData });
      })
      .catch(error => console.log(error));
  }
  //   handleChange = event => {
  //     setValue(event.target.value);
  //     // this.setState({ Name: this.state.Name });
  //   };
  //   handleSubmit = event => {
  //     if (value) {
  //       console.log("something", value);
  //       event.preventDefault();
  //     }
  // console.log("Something", this.state.Name);
  // event.preventDefault();
  //   };

  render() {
    return (
      <div className="view-container-menu">
        <div className="menu-content">
          <label style={{ color: "#475c67" }}>
            Project Name:
            <input
              type="text"
              //   value={this.state.Name}
              onChange={text => this.setState({ Name: text })}
            />
            <button type="submit" value="Submit" onClick={this.push2AirTable}>
              submit
            </button>
          </label>
        </div>
      </div>
    );
  }
}
