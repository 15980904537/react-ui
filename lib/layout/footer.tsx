import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
import { createClass, classes } from "../utils/classes";

interface FooterProps extends HtmlHTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement> | ReactText;
}
export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const sc = createClass("my-layout");
  const { className, ...rest } = props;
  return (
    <div className={classes(sc("footer"), className)} {...rest}>
      {props.children}
    </div>
  );
};
