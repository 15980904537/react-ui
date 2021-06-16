import React, { InputHTMLAttributes } from "react";
import { classes } from "../utils/classes";
import "./input.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, ...rest } = props;
  return <input className={classes("my-input", className)} {...rest}></input>;
};
