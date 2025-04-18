import { Flex, Select } from "antd";
import React from "react";
import { duplicates } from "../__fixtures__/duplicates";
import { CustomButton } from "./CustomButton";
import { Duplicate } from "./Duplicate";

export const ShowDuplicates = () => {
  const [showDuplicates, setShowDuplicates] = React.useState<boolean>(false);
  const [showBy, setShowBy] = React.useState<string>("");

  const handleChange = (value: string) => {
    setShowBy(value);
  };

  const handleClick = () => {
    setShowDuplicates(!showDuplicates);
  };

  return (
    <div className="margin-top-more">
      <Flex justify="space-between" align="center">
        <div>
          <span className="dim">Duplicates:</span> {duplicates.length}
        </div>
        <div>
          <Select
            className="select-button"
            defaultValue="default"
            options={[
              { value: "default", label: "Relevance By", disabled: true },
              { value: "most to least", label: "Most to least viewed" },
              { value: "least to most", label: "Least to most viewed" },
            ]}
            onChange={handleChange}
          />
        </div>
      </Flex>
      {!showDuplicates && (
        <div className="margin-top">
          <Duplicate
            title={duplicates[0].TI}
            domen={duplicates[0].DOM}
            url={duplicates[0].URL}
            icon={duplicates[0].FAV}
            countryCode={duplicates[0].CNTR_CODE}
            country={duplicates[0].CNTR}
            authors={duplicates[0].AU}
            date={duplicates[0].DP}
            reach={duplicates[0].REACH}
          />
        </div>
      )}
      <div className="margin-top">
        {!showDuplicates && (
          <CustomButton onClick={handleClick} customClass="button">
            View Duplicates
          </CustomButton>
        )}
      </div>
      {showDuplicates &&
        duplicates.length &&
        !showBy &&
        duplicates.map((duplicate) => (
          <div className="margin-top">
            <Duplicate
              title={duplicate.TI}
              domen={duplicate.DOM}
              url={duplicate.URL}
              icon={duplicate.FAV}
              countryCode={duplicate.CNTR_CODE}
              country={duplicate.CNTR}
              authors={duplicate.AU}
              date={duplicate.DP}
              reach={duplicate.REACH}
            />
          </div>
        ))}
      {showDuplicates &&
        duplicates.length &&
        showBy === "most to least" &&
        duplicates
          .sort((a, b) => b.REACH - a.REACH)
          .map((duplicate) => (
            <div className="margin-top">
              <Duplicate
                title={duplicate.TI}
                domen={duplicate.DOM}
                url={duplicate.URL}
                icon={duplicate.FAV}
                countryCode={duplicate.CNTR_CODE}
                country={duplicate.CNTR}
                authors={duplicate.AU}
                date={duplicate.DP}
                reach={duplicate.REACH}
              />
            </div>
          ))}
      {showDuplicates &&
        duplicates.length &&
        showBy === "least to most" &&
        duplicates
          .sort((a, b) => a.REACH - b.REACH)
          .map((duplicate) => (
            <div className="margin-top">
              <Duplicate
                title={duplicate.TI}
                domen={duplicate.DOM}
                url={duplicate.URL}
                icon={duplicate.FAV}
                countryCode={duplicate.CNTR_CODE}
                country={duplicate.CNTR}
                authors={duplicate.AU}
                date={duplicate.DP}
                reach={duplicate.REACH}
              />
            </div>
          ))}
    </div>
  );
};
