import React, { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CountrySelect = ({ getSummary }) => {
  console.log("Render CountrySelect");

  const { countries, selected, setState } = React.useContext(GlobalContext);

  const handleOnChange = (e) => {
    let country = countries.find((item) => item.ID === e.target.value)
    if (country) {
      setState({
        title: country.Country,
        stats: country,
        selected: {
          ID: country.ID,
          value: country.Country
        } 
      });
    } else {
      getSummary();
    }
  }

  return (
    <div>
      <select className="form-select mt-10 block w-full border p-3 rounded" onChange={handleOnChange} value={selected}>

        <option value={selected.ID}>{selected.value}</option>
        {
          countries.map(c => (
            <option key={c.ID} value={c.ID}>{c.Country}</option>
          ))
        }
      </select>
    </div>
  );
}

export default CountrySelect;