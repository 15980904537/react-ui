export const classes = (...res: (string | undefined)[]) => {
  return res.filter(Boolean).join(" ");
};

interface classToggles {
  [K: string]: Boolean;
}
export const createClass = (prefix: string) => {
  return function (name: string | classToggles) {
    let result;
    const nameObject =
      typeof name === "string" || name === undefined ? { [name]: name } : name;

    result = Object.entries(nameObject)
      .filter((kv) => kv[1] !== false)
      .map((kv) => kv[0])
      .map((name) => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    return result;
  };
};
