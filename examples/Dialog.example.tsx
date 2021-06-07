import React, { useState } from "react";
import { Dialog } from "../lib/dialog/dialog";

// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

export const DialogExample: React.FunctionComponent = (props: any) => {
  const [x, setX] = useState(false);
  return (
    <div className="DialogExample">
      <div style={{ color: "#0086e6" }}>
        <button
          onClick={() => {
            setX(!x);
          }}
        >
          显示dialog
        </button>
        <Dialog
          visible={x}
          buttons={[
            <button
              onClick={() => {
                setX(false);
              }}
            >
              ok
            </button>,
            <button
              onClick={() => {
                setX(false);
              }}
            >
              cancel
            </button>,
          ]}
          onclose={() => {
            setX(false);
          }}
          onCloseMask={true}
        >
          <h1>hahah</h1>
        </Dialog>
      </div>
    </div>
  );
};
