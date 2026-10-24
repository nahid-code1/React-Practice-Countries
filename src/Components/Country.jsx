import React from "react";
import "./country.css"
export const Country = ({ country }) => {
  return (
    <div className="country">
      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
        width="200"
        />
        <h4>Name : {country.name.official}</h4>
        <h5>Area : {country.area.area} </h5>
        {country.area.area> 150000 ? <p style={{color: "green"}}>Big country</p> : <p style={{color: "red"}}>Small country</p>}
    </div>
  );
};
