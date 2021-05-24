import React from "react";
import "./icon.scss";
import "./importAll";
// interface IconProps {
//   name: String;
//   onClick: (e: React.MouseEvent) => void;
// }
interface IconProps {
  name: String;
  onClick: React.MouseEventHandler<SVGElement>;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className="my-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  );
};
