import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
import { createClass, classes } from "../utils/classes";

interface SliderProps extends HtmlHTMLAttributes<HTMLElement> {
  children?: ReactElement | Array<ReactElement> | ReactText;
}
export const Slider: React.FunctionComponent<SliderProps> = (props) => {
  const sc = createClass("my-layout");
  const { className, ...rest } = props;
  return (
    <div className={classes(sc("slider"), className)} {...rest}>
      {props.children}
    </div>
  );
};
