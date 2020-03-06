import React from "react";
import axios from "axios";

export default class AddMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: "",
      fields: {
        Name: ""
      }
    };
  }

  push2AirTable = async e => {
    e.preventDefault();
    const { Name } = this.state.fields;

    let fields = {
      fields: {
        Name
      }
      // Status: this.state.status,
      // Current_Team: this.state.team
    };

    const url = `https://api.airtable.com/v0/appQSPi3XUdUMbM1m/Projects?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`;

    try {
      const response = await axios.post(url, fields);
      console.log("airtables response \n", response);
    } catch (error) {
      console.log(error);
    }
  };
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
    let userInput = {
      fields: {
        Name: this.state.Name
      }
    };
    return (
      <div className="view-container-menu">
        <form className="menu-content" onSubmit={this.push2AirTable}>
          <label style={{ color: "#475c67" }}>
            Project Name:
            <input
              type="text"
              //   value={this.state.Name}
              onChange={event =>
                this.setState({ fields: { Name: event.target.value } })
              }
            />
            <button type="submit" value="Submit">
              submit
            </button>
          </label>
        </form>
      </div>
    );
  }
}
