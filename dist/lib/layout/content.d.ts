import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
interface ContentProps extends HtmlHTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement> | ReactText;
}
export declare const Content: React.FunctionComponent<ContentProps>;
export {};
