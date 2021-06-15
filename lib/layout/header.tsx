import React from "react";
import { createClass } from "../utils/classes";

export const Header: React.FunctionComponent = (props) => {
  const sc = createClass("my-layout");

  return <div className={sc("header")}> {props.children}</div>;
};
