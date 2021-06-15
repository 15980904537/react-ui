import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
import { createClass, classes } from "../utils/classes";

interface HeaderProps extends HtmlHTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement> | ReactText;
}
export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const sc = createClass("my-layout");
  const { className, ...rest } = props;
  return (
    <div className={classes(sc("header"), className)} {...rest}>
      {props.children}
    </div>
  );
};
