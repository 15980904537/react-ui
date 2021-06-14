import React from "react";
import { createClass } from "../utils/classes";

export const Header: React.FunctionComponent = () => {
  const sc = createClass("my-layout");

  return <div className={sc("header")}>Header</div>;
};
