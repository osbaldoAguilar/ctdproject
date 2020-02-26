import React from "react";
import Block from "../Block";

const Blocks = props => {
  const { projects } = props;
  console.log("blocks: ", projects);
  const list = projects.map(projectItem => {
    return (
      <div className="block">
        <Block project={projectItem.fields} key={projectItem.id} />
      </div>
    );
  });
  return <div>{list}</div>;
};
export default Blocks;
