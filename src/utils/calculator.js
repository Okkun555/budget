export const totalEntry = (entries) =>
  entries.reduce((prev, acm) => prev + acm.value, 0);
