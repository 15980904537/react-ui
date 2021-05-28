import React, { Fragment } from "react";
import { Icon } from "../icon/Icon";
import "./dialog.scss";
import { createClass } from "../utils/classes";
interface DialogProps {
  visible: boolean;
}
export const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const sc = createClass("my-dialog");
  return props.visible ? (
    <Fragment>
      <div className={sc("mask")}></div>
      <div className={sc()}>
        <Icon name="close"></Icon>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        <footer className={sc("footer")}>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};
