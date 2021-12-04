import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const initialState = {
  title: 'Global',
  dataDate: '',
  stats: {},
  countries: [],
  selected: { ID: 0, value: 'Select country' },
  loading: false
}
const GlobalProvider = ({ children }) => {

  const [state, setState] = useState(initialState)

  return (
    <GlobalContext.Provider value={{
      ...state,
      setState: (data) => setState({ ...state, ...data })
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };