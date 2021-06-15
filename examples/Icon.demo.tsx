import React from "react";
import { Demo } from "./demo";
import { IconExample } from "./Icon.example";
export const IconDemo: React.FunctionComponent = () => {
  const x = require("!!raw-loader!./Icon.example.tsx");
  return (
    <Demo code={x.default}>
      <IconExample></IconExample>
    </Demo>
  );
};
