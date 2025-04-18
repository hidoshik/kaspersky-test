import React, { JSX } from "react";
import "../App.css";
import { Card } from "antd";
import { SnippetNewsHeader } from "./SnippetNewsHeader";
import { SnippetInfoMain } from "./SnippetInfoMain";
import { SnippetNewsBody } from "./SnippetNewsBody";
import { ShowDuplicates } from "./ShowDuplicates";

interface IData_SnippetNews {
  ID: number; // идентификатор новости
  TI: string; // заголовок новости
  AB: string; // содержимое новости
  URL: string; // ссылка на новость
  DOM: string; // домен
  DP: string; // дата и время публикации новости в формате "%Y-%m-%dT%H:%M:%S")
  LANG: string; // язык новости
  REACH: number; // охват новости
  KW: IData_TagItem[]; // ключевые слова
  AU: string[]; // автор новости
  CNTR: string; // страна
  CNTR_CODE: string; // код страны
  SENT: string; // сантимент новости
  TRAFFIC: IData_TrafficItem[]; // траффик из стран
  FAV: string; // ссылка на иконку
  HIGHLIGHTS: string[]; // блоки содержимого новости с ключевыми словами
}

interface IData_TagItem {
  value: string; // название тега
  count: number; // кол-во тегов с указанным названием
}

interface IData_TrafficItem {
  value: string; // название страны-источник траффика
  count: number; // объём траффика для указанной страны
}

interface SnippetNewsProps {
  data: IData_SnippetNews;
}

export const SnippetNews = ({ data }: SnippetNewsProps): JSX.Element => {
  return (
    <Card>
      <SnippetNewsHeader
        title={data.TI}
        domen={data.DOM}
        url={data.URL}
        country={data.CNTR}
        countryCode={data.CNTR_CODE}
        authors={data.AU}
        language={data.LANG}
      >
        <SnippetInfoMain
          sent={data.SENT}
          date={data.DP}
          reach={data.REACH}
          traffic={data.TRAFFIC}
        />
      </SnippetNewsHeader>
      <SnippetNewsBody
        about={data.AB}
        highlights={data.HIGHLIGHTS}
        highlightsRandom={Math.floor(Math.random() * data.HIGHLIGHTS.length)}
        keywords={data.KW}
      />
      <ShowDuplicates />
    </Card>
  );
};
