type CapitalizeType = (str: string) => string;

export const capitalize: CapitalizeType = (str) => {
  if (str.length === 1) {
    return str.toUpperCase();
  }
  const words = str.split(" ");
  const newStr = words
    .map((word) => {
      if (word.length > 1) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");

  return newStr;
};
