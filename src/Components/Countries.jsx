import React, { use, useState } from "react";
import { Country } from "./Country";
import './country.css'
const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country)=>{
    console.log("country visited has been clicked",country)
  }

  return (
    <div>

      <h1>Total no. of countries: {countries.length}</h1>
      <h1>Total visited countries: </h1>
      <div className="countries">
        {countries.map((country) => (
        <Country country={country}
        key={country.cca3.cca3}
        handleVisitedCountries = {handleVisitedCountries}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
