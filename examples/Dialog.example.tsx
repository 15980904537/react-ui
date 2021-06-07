import React, { useState } from "react";
import { Dialog, alert, confirm, modal } from "../lib/dialog/dialog";

// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

export const DialogExample: React.FunctionComponent = (props: any) => {
  const [x, setX] = useState(false);
  const openModal = () => {
    const close = modal(
      <h1>
        hello
        <button
          onClick={() => {
            close();
          }}
        >
          close
        </button>
      </h1>
    );
  };
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

        <button
          onClick={() => {
            alert("可以关闭了");
          }}
        >
          alert
        </button>
        <button
          onClick={() => {
            confirm(
              "可以关闭了",
              () => {
                console.log("yes");
              },
              () => {
                console.log("no");
              }
            );
          }}
        >
          confirm
        </button>
        <button onClick={openModal}>modal</button>
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
