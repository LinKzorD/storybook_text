type TruncateType = (
  str: string,
  len: number,
  keepLastWord?: boolean
) => string;

export const truncate: TruncateType = (str, len, keepLastWord) => {
  if (len > str.length) {
    return str;
  }
  if (keepLastWord) {
    let newStr = str.split(" ").slice(0, len).join(" ");
    let lastWord = str.split(" ");
    return newStr + "..." + lastWord[lastWord.length - 1];
  }
  let newStr = str.split(" ").slice(0, len).join(" ");
  return newStr + "...";
};
