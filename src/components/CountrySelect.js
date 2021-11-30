import React, {useState} from 'react';


const CountrySelect = ({countries, handleOnChange, selected}) => {

  console.log("Render CountrySelect", selected);

  return ( 
    <div>
      <select className="form-select mt-10 block w-full border p-3 rounded"  onChange={handleOnChange} value={selected}>

        <option value={selected.ID}>{selected.value}</option>
        {
          countries.map( c => (
            <option key={c.ID} value={c.ID}>{c.Country}</option>
          ))
        }
      </select>
    </div>
   );
}
 
export default CountrySelect;