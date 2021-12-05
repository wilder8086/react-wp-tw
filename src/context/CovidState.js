import React, { createContext, useReducer } from "react";
import CovidContext from './CovidContext';
import CovidReducer from './CovidReducer';
import { GET_SUMMARY, CHANGE_COUNTRY } from "./Types";

const CovidState = ({ children }) => {
  const initialState = {
    title: 'Global',
    dataDate: '',
    stats: {},
    countries: [],
    selected: { ID: 0, value: 'Select country' },
    loading: false,
  }

  const [state, dispatch] = useReducer(CovidReducer, initialState);

  const getSummary = async () => {
    let res = await fetch('https://api.covid19api.com/summary');
    let dataResponse = await res.json();
    console.log("Llamando a getSummary() : ", dataResponse);
    dispatch({ type: GET_SUMMARY, payload: dataResponse });
  }

  const changeCountry = (countries, id) => {
    let country = countries.find((item) => item.ID === id)
    if (country) {
      dispatch({ type: CHANGE_COUNTRY, payload: country });
    } else {
      getSummary();
    }    
  }

  return (
    <CovidContext.Provider
      value={{
        title: state.title,
        dataDate: state.dataDate,
        stats: state.stats,
        countries: state.countries,
        selected: state.selected,
        getSummary,
        changeCountry,    
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};

export { CovidState };