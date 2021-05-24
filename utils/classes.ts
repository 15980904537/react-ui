export const classes = (...res: (string | undefined)[]) => {
  return res.filter(Boolean).join(" ");
};
