import React from "react";
import "../icons/wechat.svg";
interface IconProps {
  name: String;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className={"icon"}>
        <use
          xlinkHref={`#${props.name}`}
          style={{ width: "16px", height: "16px" }}
        ></use>
      </svg>
    </span>
  );
};
