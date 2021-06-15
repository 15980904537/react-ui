import React from "react";

interface DemoProps {
  code: string;
}
export const Demo: React.FunctionComponent<DemoProps> = (props) => {
  return (
    <div>
      {props.children}
      <pre>{props.code}</pre>
    </div>
  );
};
