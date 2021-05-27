import React from "react";
import "./icon.scss";
import "./importAll";
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    className: string;
}
export declare const Icon: React.FunctionComponent<IconProps>;
export {};
