import React from "react";
import { createClass } from "../utils/classes";

export const Slider: React.FunctionComponent = () => {
  const sc = createClass("my-layout");

  return <div className={sc("slider")}> Slider</div>;
};
