import React from "react";

interface DomenProps {
  url: string;
  domen: string;
  icon?: string;
}

export const Domen = (params: DomenProps) => {
  const { url, domen, icon } = params;
  return (
    <span>
      <img src={icon ? icon : '/favicons/globe.png'} className="icon" alt="url" />
      <a className="blue" href={url}>
        <u>{domen}</u>
      </a>
    </span>
  );
};
