import React from "react";
import { Card } from "antd";
import { SnippetNewsHeader } from "./SnippetNewsHeader";
import { SnippetInfoDuplicate } from "./SnippetInfoDuplicate";

interface DuplicateProps {
  title: string;
  domen: string;
  url: string;
  icon: string;
  country: string;
  countryCode: string;
  authors: string[];
  date: string;
  reach: number;
}


export const Duplicate = (params: DuplicateProps) => {
  const {
    title,
    domen,
    url,
    icon,
    countryCode,
    country,
    authors,
    date,
    reach,
  } = params;
  return (
    <Card className="blue-border">
      <SnippetNewsHeader
        title={title}
        domen={domen}
        url={url}
        icon={icon}
        countryCode={countryCode}
        country={country}
        authors={authors}
      >
        <SnippetInfoDuplicate date={date} reach={reach} />
      </SnippetNewsHeader>
    </Card>
  );
};
