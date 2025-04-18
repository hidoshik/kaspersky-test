import React from "react";
import { Button, Space, Tag } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface SnippetNewsBodyProps {
  about: string;
  highlights: string[];
  keywords: IData_TagItem[];
  highlightsRandom: number;
}

interface IData_TagItem {
  value: string;
  count: number;
}

export const SnippetNewsBody = (params: SnippetNewsBodyProps) => {
  const [showAbout, setShowAbout] = React.useState<boolean>(false);
  const [showKeys, setShowKeys] = React.useState<boolean>(false);

  const { about, highlights, highlightsRandom, keywords } = params;

  const highlightsText = highlights[highlightsRandom].replace(
    /<kw>(.*?)<\/kw>/g,
    '<span class="highlighted">$1</span>'
  );

  const keys = keywords.slice(0, 6).map(({ value, count }) => (
    <Tag className="tag">
      <span className="dim">{value}</span> {count}
    </Tag>
  ));

  return (
    <>
      {showAbout ? (
        <p className="margin-top">{about}</p>
      ) : (
        <p
          className="margin-top"
          dangerouslySetInnerHTML={{ __html: highlightsText }}
        />
      )}
      <div>
        <Button
          onClick={() => setShowAbout(!showAbout)}
          className="button-more"
        >
          {showAbout ? (
            <span className="blue">
              Show less <UpOutlined />
            </span>
          ) : (
            <span className="blue">
              Show more <DownOutlined />
            </span>
          )}
        </Button>
      </div>
      <Space className="margin-top">
        {keys}
        {keywords.length > 6 && showKeys
          ? keywords.slice(6).map(({ value, count }) => (
              <Tag className="tag">
                <span className="dim">{value}</span> {count}
              </Tag>
            ))
          : keywords.length > 6 && (
              <Button
                onClick={() => setShowKeys(true)}
                className="button-more blue"
              >
                {`Show All +${keywords.length - 6}`}
              </Button>
            )}
      </Space>
    </>
  );
};
