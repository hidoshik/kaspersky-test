import React from "react";
import { Flex, Space } from "antd";
import { formatDate } from "../utils/formatDate";
import { formatNumber } from "../utils/formatNumber";
import { Details } from "./Details";

interface SnippetInfoDuplicateProps {
  date: string;
  reach: number;
}

export const SnippetInfoDuplicate = (params: SnippetInfoDuplicateProps) => {
  const { date, reach } = params;
  const newsDate = formatDate(date);

  const newsReach = formatNumber(reach);

  return (
    <>
      <Flex justify="space-between">
        <Space size="large">
          <p className="dim">{newsDate}</p>
          <p>{newsReach} Top Reach</p>
        </Space>
        <Details />
      </Flex>
    </>
  );
};
