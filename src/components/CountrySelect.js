import React, { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CountrySelect = ({ getSummary }) => {
  console.log("Render CountrySelect");
  
  const { title, stats, countries, selected } = React.useContext(GlobalContext);

  const [titleValue, setTitleValue] = title;
  const [statsValue, setStatsValue] = stats;
  const [countriesValue, setCountriesValue] = countries;
  const [selectedValue, setSelectedValue] = selected;


  const handleOnChange = (e) => {
    let country = countriesValue.find((item) => item.ID === e.target.value)
    if (country) {
      setTitleValue(country.Country);
      setStatsValue(country);
      setSelectedValue({
          ID: country.ID,
          value: country.Country
        });

    } else {
      getSummary();
    }
  }

  return (
    <div>
      <select className="form-select mt-10 block w-full border p-3 rounded" onChange={handleOnChange} value={selectedValue}>

        <option value={selectedValue.ID}>{selectedValue.value}</option>
        {
          countriesValue.map(c => (
            <option key={c.ID} value={c.ID}>{c.Country}</option>
          ))
        }
      </select>
    </div>
  );
}

export default CountrySelect;