import React, { Fragment } from "react";
import { Icon } from "../icon/Icon";
import "./dialog.scss";
interface DialogProps {
  visible: boolean;
}
export const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return props.visible ? (
    <Fragment>
      <div className="my-dialog-mask"></div>
      <div className="my-dialog">
        <Icon name="close"></Icon>
        <header className="my-dialog-header">提示</header>
        <main className="my-dialog-main">{props.children}</main>
        <footer className="my-dialog-footer">
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};
