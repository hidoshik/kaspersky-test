import React from "react";

interface AuthorsProps {
  authors: string[];
}

export const Authors = ({ authors }: AuthorsProps) => {
  return (
    <span>
      <img src="./favicons/person.png" className="icon" alt="author" />
      {authors.length > 0
        ? authors.reduce((acc, curr, index) => {
            if (index < 2) {
              acc += (index > 0 ? ", " : "") + curr;
            } else if (index === 2) {
              acc += ", et al.";
            }
            return acc;
          }, "")
        : "Anonymous"}
    </span>
  );
};
