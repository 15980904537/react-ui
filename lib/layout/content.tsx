import React from "react";
import { createClass } from "../utils/classes";

export const Content: React.FunctionComponent = (props) => {
  const sc = createClass("my-layout");
  return <div className={sc("content")}>Content</div>;
};
