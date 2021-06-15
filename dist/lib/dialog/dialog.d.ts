import React, { ReactElement, ReactFragment } from "react";
import "./dialog.scss";
interface DialogProps {
    visible: boolean;
    buttons?: Array<React.ReactElement> | undefined;
    onclose: React.MouseEventHandler;
    onCloseMask?: Boolean;
}
export declare const Dialog: React.FunctionComponent<DialogProps>;
export declare const alert: (props: String) => void;
export declare const confirm: (content: String, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
export declare const modal: (content: ReactElement | ReactFragment) => () => void;
export {};
