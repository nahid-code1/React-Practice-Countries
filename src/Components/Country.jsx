import React from "react";

export const Country = ({ country }) => {
  return (
    <div>
      <h4>Name : {country.name.official}</h4>
      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
        width="200"
      />
    </div>
  );
};
