import React from "react";

interface CountryProps {
  country: string;
  countryCode: string;
}

export const Country = ({ country, countryCode }: CountryProps) => {
  return (
    <span>
      <img src={`/favicons/${countryCode}.png`} className="icon" alt={country} />
      {country}
    </span>
  );
};
