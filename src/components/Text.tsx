import React from "react";
import { capitalize as capitalizeString } from "../format/capitalize";
import { truncate as truncateString } from "../format/truncate";

export interface TextProps {
  children: string;
  capitalize?: boolean;
  truncate?: boolean;
  len?: number;
  keepLastWord?: boolean;
  text?: string;
}

const Text = ({
  text,
  capitalize,
  truncate,
  len,
  children,
  keepLastWord,
}: TextProps) => {
  if (capitalize) {
    return (
      <div>
        <h1>{capitalizeString(text || children)}</h1>
      </div>
    );
  }
  if (truncate && len) {
    return (
      <div>
        <h1>{truncateString(text || children, len, keepLastWord)}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{text || children}</h1>
    </div>
  );
};

export default Text;
