import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <div>Loading</div>
        <ClipLoader
          css={override}
          size={350}
          //size={"150px"} this also works
          color={"lightgreen"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
