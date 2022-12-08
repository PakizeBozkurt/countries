import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import  "/home/codeyourfuture/Documents/React/W-2/Challenges/Countries/countries/src/country.css";

function CardCountry() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([country]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setFiltered(
      country.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  console.log(country);

  return (
    <div>
      <h2>Countries</h2>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <div className="container">
        <div className="row">
          {filtered.map((element) => {
            return <CountryInfo name={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardCountry;
