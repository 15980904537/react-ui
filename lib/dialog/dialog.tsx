import React, { Fragment } from "react";
import { Icon } from "../icon/Icon";
import "./dialog.scss";
import { createClass } from "../utils/classes";
interface DialogProps {
  visible: boolean;
  buttons: Array<React.ReactElement>;
  onclose: React.MouseEventHandler;
  onCloseMask?: Boolean;
}
export const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const sc = createClass("my-dialog");
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onclose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.onCloseMask) {
      props.onclose(e);
    }
  };
  return props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close"></Icon>
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        <footer className={sc("footer")}>
          {props.buttons.map((button, index) => {
            return React.cloneElement(button, { key: index });
          })}
        </footer>
      </div>
    </Fragment>
  ) : null;
};
Dialog.defaultProps = {
  onCloseMask: false,
};
