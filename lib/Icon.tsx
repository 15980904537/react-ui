import React from "react";
import "./icon.scss";
import "./importAll";
// interface IconProps {
//   name: String;
//   onClick: (e: React.MouseEvent) => void;
// }
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  //   onClick: React.MouseEventHandler<SVGElement>;
}
export const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name, ...resProps } = props;
  return (
    <span>
      <svg className="my-icon" {...resProps}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </span>
  );
};
