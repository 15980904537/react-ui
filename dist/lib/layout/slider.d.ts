import React, { HtmlHTMLAttributes, ReactElement, ReactText } from "react";
interface SliderProps extends HtmlHTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement> | ReactText;
}
export declare const Slider: React.FunctionComponent<SliderProps>;
export {};
