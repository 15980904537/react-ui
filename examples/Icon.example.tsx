import React from "react";
import { Icon } from "../lib/icon/Icon";

// function fn(e: React.MouseEvent<SVGAElement | SVGUseElement>) {
//   //   console.log("1");
//   console.log(e);
//   console.log(e.target);
//   //断言
//   console.log((e.target as SVGUseElement).href);
// }

export const IconExample: React.FunctionComponent = (props: any) => {
  return (
    <div className="IconExample">
      <div style={{ color: "#0086e6" }}>
        <Icon name="alipay" />
        <Icon name="wechat" />
      </div>
    </div>
  );
};
