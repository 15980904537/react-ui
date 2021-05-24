import React from "react";
import "./icon.scss";
import "./importAll";
interface IconProps {
  name: String;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className="my-icon">
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  );
};
