export const classes = (...res: (string | undefined)[]) => {
  return res.filter(Boolean).join(" ");
};

export const createClass = (prefix: string) => {
  return function (name?: string) {
    return [prefix, name].filter(Boolean).join("-");
  };
};
