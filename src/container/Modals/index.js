import React from "react";

export default class Modals extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div className="modal">{this.props.children}</div>;
  }
}
