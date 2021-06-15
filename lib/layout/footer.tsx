import React from "react";
import { createClass } from "../utils/classes";
export const Footer: React.FunctionComponent = (props) => {
  const sc = createClass("my-layout");

  return <div className={sc("footer")}> {props.children}</div>;
};
