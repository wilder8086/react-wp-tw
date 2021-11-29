import React, {useState} from 'react';


const CountrySelect = ({countries, handleOnChange, selected}) => {

  //const [countrySelected, setCountrySelected] = useState(selected);

  console.log("selected : ", selected);

  const  handleChange = (e) => {
    console.log("wilder ", e.target.value);
    let country = countries.find((item) => item.ID === e.target.value)
    setCountrySelected(country);
    console.log("Pais : ", country);
  }

  return ( 
    <div>
      <select className="form-select mt-10 block w-full border p-3 rounded"  onChange={handleOnChange}>
        <option value={selected.ID}>{selected.label}</option>
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