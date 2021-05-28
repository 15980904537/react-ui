import React from "react";
import { Dialog } from "../lib/dialog/dialog";

// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

export const DialogExample: React.FunctionComponent = (props: any) => {
  return (
    <div className="DialogExample">
      <div style={{ color: "#0086e6" }}>
        <Dialog />
        <Dialog />
      </div>
    </div>
  );
};
