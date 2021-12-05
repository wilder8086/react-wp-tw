import React, { useContext } from 'react';
import moment from 'moment';
import CovidContext from '../context/CovidContext';

const DataTitle = () => {
  console.log("Render DataTitle ");
  
  const { title, dataDate } = useContext(CovidContext);

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