import React, { Fragment, ReactElement, ReactFragment } from "react";
import { Icon } from "../icon/Icon";
import ReactDOM from "react-dom";
import "./dialog.scss";
import { createClass } from "../utils/classes";
interface DialogProps {
  visible: boolean;
  buttons?: Array<React.ReactElement> | undefined;
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
  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc("")}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close"></Icon>
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc("footer")}>
            {props.buttons?.map((button, index) => {
              return React.cloneElement(button, { key: index });
            })}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;
  return ReactDOM.createPortal(x, document.body);
};

export const alert = (props: String) => {
  //构造一个组件
  let component = (
    <Dialog
      visible={true}
      onclose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {props}
    </Dialog>
  );
  //创建一个div元素
  let div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};
export const confirm = (content: String, yes?: () => void, no?: () => void) => {
  //构造一个组件
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  let component = (
    <Dialog
      visible={true}
      onclose={() => {
        onNo();
      }}
      buttons={[
        <button
          onClick={() => {
            onYes();
          }}
        >
          yes
        </button>,
        <button
          onClick={() => {
            onNo();
          }}
        >
          {" "}
          no
        </button>,
      ]}
    >
      {content}
    </Dialog>
  );
  //创建一个div元素
  let div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

export const modal = (content: ReactElement | ReactFragment) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  //构造一个组件
  let component = (
    <Dialog visible={true} onclose={close}>
      {content}
    </Dialog>
  );
  //创建一个div元素
  let div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
Dialog.defaultProps = {
  onCloseMask: false,
};
