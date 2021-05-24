import React from "react";

interface IconProps {
  name: String;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  return <span>{props.name}</span>;
};
