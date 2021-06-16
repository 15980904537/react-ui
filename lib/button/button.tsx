import React, { ButtonHTMLAttributes } from "react";
import { classes } from "../utils/classes";
import "./button.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "normal" | "important" | "danger";
}
export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { className, level, ...rest } = props;
  return (
    <button
      className={classes("my-button", `my-button-${level}`, className)}
      {...rest}
    ></button>
  );
};

Button.defaultProps = {
  level: "normal",
};
