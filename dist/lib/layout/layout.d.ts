import React, { HtmlHTMLAttributes, ReactElement } from "react";
import "./layout.scss";
interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement>;
}
export declare const Layout: React.FunctionComponent<LayoutProps>;
export { Content } from "./content";
export { Header } from "./header";
export { Slider } from "./slider";
export { Footer } from "./footer";
