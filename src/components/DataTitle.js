import React from 'react';
import moment from 'moment';
import { GlobalContext } from '../context/GlobalState';

const DataTitle = () => {
  console.log("Render DataTitle ");
  
  const { title, dataDate } = React.useContext(GlobalContext);

  const [titleValue, setTitleValue] = title;
  const [dataDateValue, setDataDateValue] = dataDate;

  const timestamp = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{ titleValue }</h2>
      <div className="text-2xl mt-4 mb-10">
        { timestamp(dataDateValue) }
      </div>
    </div>
  );
}

export default DataTitle;