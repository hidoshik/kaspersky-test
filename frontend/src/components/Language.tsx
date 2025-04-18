import React from "react";
import { formatUpperLetter } from "../utils/formatUpperLetter";

interface LanguageProps {
  language: string;
}

export const Language = ({ language }: LanguageProps) => {
  const code = formatUpperLetter(language);

  return (
    <span>
      <img src="/favicons/book.png" className="icon" alt={language} />
      {code}
    </span>
  );
};
