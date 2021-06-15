import React from "react";
import { createClass } from "../utils/classes";

export const Slider: React.FunctionComponent = (props) => {
  const sc = createClass("my-layout");

  return <div className={sc("slider")}> {props.children}</div>;
};
