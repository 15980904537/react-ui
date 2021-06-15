import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
import { createClass, classes } from "../utils/classes";
interface ContentProps extends HtmlHTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement> | ReactText;
}
export const Content: React.FunctionComponent<ContentProps> = (props) => {
  const sc = createClass("my-layout");
  const { className, ...rest } = props;
  return (
    <div className={classes(sc("content"), className)} {...rest}>
      {" "}
      {props.children}
    </div>
  );
};
