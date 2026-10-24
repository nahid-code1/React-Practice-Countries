import React, { use } from "react";
import { Country } from "./Country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h1>Total no. of countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
