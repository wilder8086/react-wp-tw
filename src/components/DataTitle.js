import React from 'react';
import moment from 'moment';
import { GlobalContext } from '../context/GlobalState';

const DataTitle = () => {
  console.log("Render DataTitle ");
  
  const { titleValue, dataDateValue } = React.useContext(GlobalContext);

  const [title] = titleValue;
  const [dataDate] = dataDateValue;

  const timestamp = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{ title }</h2>
      <div className="text-2xl mt-4 mb-10">
        { timestamp(dataDate) }
      </div>
    </div>
  );
}

export default DataTitle;