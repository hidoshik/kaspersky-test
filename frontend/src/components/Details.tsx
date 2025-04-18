import React from "react";
import { Space, Tag } from "antd";
import { BorderOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { formatUpperLetter } from "../utils/formatUpperLetter";

interface DetailsProps {
  sent?: string;
}

export const Details = (params: DetailsProps) => {
  const { sent } = params;

  return (
    <Space>
      {sent && (
        <Tag
          className="no-margin"
          color={sent === "positive" ? "green" : "red"}
        >
          {formatUpperLetter(sent)}
        </Tag>
      )}
      <InfoCircleOutlined />
      <BorderOutlined />
    </Space>
  );
};
