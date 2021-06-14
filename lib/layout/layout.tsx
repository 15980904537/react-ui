import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { createClass, classes } from "../utils/classes";
import { Slider } from "./slider";
import "./layout.scss";

interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}
export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className, children, ...rest } = props;
  const sc = createClass("my-layout");
  const xxx = children as Array<ReactElement>;
  const hasClass =
    "length" in xxx &&
    xxx.reduce((result, node) => {
      return result || node.type == Slider;
    }, false);
  console.log(hasClass);
  return (
    <div className={classes(sc({ "": true, hasClass }), className)} {...rest}>
      {props.children}
    </div>
  );
};
