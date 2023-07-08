export const defineGradeMovie = (value: number): string => {
  if (value < 5) return "#fc4b37";
  if (7 > value && value > 5) return "#fdca52";
  return "#6dc849";
};
