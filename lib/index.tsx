import React from "react";

import ReactDOM from "react-dom";
import { Icon } from "./Icon";

// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }
const fn: React.MouseEventHandler = (e) => {
  console.log(e);
};
const fn1: React.MouseEventHandler = (e) => {
  console.log(1);
};
ReactDOM.render(
  <Icon name={"wechat"} onClick={fn} onMouseDown={fn1} />,
  document.querySelector("#root")
);
