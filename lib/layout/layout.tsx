import React, { HtmlHTMLAttributes } from "react";
import { createClass, classes } from "../utils/classes";

interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {}
export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className } = props;
  const sc = createClass("my-layout");
  return <div className={classes(sc(), className)}>{props.children}</div>;
};
