import React, { useContext } from 'react';
import  CovidContext  from '../context/CovidContext';

const CountrySelect = ({ getSummary }) => {
  console.log("Render CountrySelect");

  const { countries, selected, changeCountry } = useContext(CovidContext);

  const handleOnChange = (e) => {
    changeCountry(countries, e.target.value);
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