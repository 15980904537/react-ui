import React from "react";
import "./icon.scss";
import "./importAll";
import { classes } from "../utils/classes";
// interface IconProps {
//   name: String;
//   onClick: (e: React.MouseEvent) => void;
// }
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  className?: string;
  //   onClick: React.MouseEventHandler<SVGElement>;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name, className, ...resProps } = props;
  return (
    <span>
      <svg className={classes("my-icon", className)} {...resProps}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </span>
  );
};
