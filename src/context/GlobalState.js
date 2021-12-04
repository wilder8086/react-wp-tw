import React, { createContext, useState } from "react";

export const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {


  const [title, setTitle] = useState('Global');
  const [dataDate, setDataDate] = useState('');
  const [stats, setStats] = useState({});
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState({ ID: 0, value: 'Select country'});
  
  return (
    <GlobalContext.Provider value={{ title: [title, setTitle], dataDate: [dataDate, setDataDate], stats: [stats, setStats], countries: [countries, setCountries], selected: [selected, setSelected] }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };