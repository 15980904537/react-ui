import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
interface FooterProps extends HtmlHTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement> | ReactText;
}
export declare const Footer: React.FunctionComponent<FooterProps>;
export {};
