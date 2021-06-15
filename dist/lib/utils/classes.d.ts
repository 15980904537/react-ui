export declare const classes: (...res: (string | undefined)[]) => string;
interface classToggles {
    [K: string]: Boolean;
}
export declare const createClass: (prefix: string) => (name: string | classToggles) => string;
export {};
