import { GET_SUMMARY, CHANGE_COUNTRY } from "./Types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_SUMMARY:
      return {
        ...state,
        title: 'Global',
        dataDate: payload.Date,
        countries: payload.Countries,
        stats: payload.Global,
        selected: {
          ID: 0,
          value: 'Select country'
        }        
      };
    case CHANGE_COUNTRY:
      return {
        ...state,
        selectedUser: payload,
        title: payload.Country,
        stats: payload,
        selected: {
          ID: payload.ID,
          value: payload.Country
        }         
      };
    default:
      return state;
  }
};