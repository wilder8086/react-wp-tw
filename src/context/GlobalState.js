import { createContext, useReducer } from "react";


import appReducer from "./AppReducer";


const initialState = {
  title: 'Global',
  dataDate: '',
  stats: {},
  countries: [],
  selected: {
    ID: 0,
    value: 'Select country'
  }
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(appReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        ...globalState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};  