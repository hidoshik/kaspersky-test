import React from "react";
import { Space } from "antd";
import { Domen } from "./Domen";
import { Country } from "./Country";
import { Language } from "./Language";
import { Authors } from "./Authors";

interface SnippetNewsHeaderProps {
  children: React.ReactNode;
  title: string;
  domen: string;
  url: string;
  icon?: string;
  country: string;
  countryCode: string;
  authors: string[];
  language?: string;
}

export const SnippetNewsHeader = (params: SnippetNewsHeaderProps) => {
  const {
    title,
    url,
    icon,
    domen,
    country,
    countryCode,
    authors,
    language,
    children,
  } = params;

  return (
    <>
      {children}
      <h2 className="header blue">{title}</h2>
      <Space size="large">
        <Domen url={url} domen={domen} icon={icon} />
        <Country country={country} countryCode={countryCode} />
        {language && <Language language={language} />}
        <Authors authors={authors} />
      </Space>
    </>
  );
};
