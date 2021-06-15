import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
interface HeaderProps extends HtmlHTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement> | ReactText;
}
export declare const Header: React.FunctionComponent<HeaderProps>;
export {};
