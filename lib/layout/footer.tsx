import React from "react";
import { createClass } from "../utils/classes";
export const Footer: React.FunctionComponent = () => {
  const sc = createClass("my-layout");

  return <div className={sc("footer")}>Footer</div>;
};
