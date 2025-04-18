import React from "react";
import { Flex, Space } from "antd";
import { formatDate } from "../utils/formatDate";
import { formatNumber } from "../utils/formatNumber";
import { Details } from "./Details";

interface SnippetInfoMainProps {
  date: string;
  reach: number;
  sent: string;
  traffic: IData_TrafficItem[];
}

interface IData_TrafficItem {
  value: string;
  count: number;
}

export const SnippetInfoMain = (params: SnippetInfoMainProps) => {
  const { date, reach, sent, traffic } = params;
  const newsDate = formatDate(date);
  const dateDay = newsDate.slice(0, 3);
  const dateRest = newsDate.slice(3);

  const newsReach = formatNumber(reach);

  return (
    <>
      <Flex justify="space-between">
        <Space size="large">
          <p>
            {dateDay} <span className="dim">{dateRest}</span>
          </p>
          <p>
            {newsReach} <span className="dim">Reach</span>
          </p>
          <p>
            <span className="dim">Top Traffic:</span>
            {traffic.map(({ value, count }) => (
              <>
                <span className="dim"> {value} </span>
                {Math.floor(count * 100)}%
              </>
            ))}
          </p>
        </Space>
        <Details sent={sent} />
      </Flex>
    </>
  );
};
