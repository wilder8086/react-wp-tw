import React, { useState, useEffect } from 'react';
import loadingImage from '../assets/hourglass.gif';
import CountrySelect from '../components/CountrySelect';
import DataBoxes from '../components/DataBoxes';
import DataTitle from '../components/DataTitle';

const initialState = {
  title: 'Global',
  dataDate: '',
  stats: {},
  countries: [],
}

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(initialState);

  const [selected, setSelected] = useState({
    ID: 1,
    label: 'Select country'
  });

  useEffect(() => {
    getData()
  }, []); // [] se va ejecutar la primera vez

  const getData = async () => {
    let res = await fetch('https://api.covid19api.com/summary');
    let data = await res.json();
    console.log("Llamando a getData() : ",data);
    setData({
      ...initialState,
      dataDate: data.Date,
      countries: data.Countries,
      stats: data.Global,     
    })
  }

  const handleOnChange = (e) => {
    console.log("wilder ", e.target.value);
    let country = data.countries.find((item) => item.ID === e.target.value)
    if (country) {
      setData({
        ...data,
        stats: country,
        title: country.Country,
      });
      console.log("Pais : ", country);
    } else {
      console.log("Else : ", data);
      getData();
    }

  }

  const handleOnclick = () => {
    setIsLoading(true);
    getData();
    setSelected({...selected,
      ID: 1,
      label: 'Select country'
    });
    setIsLoading(false);
  }

  return (
    <>
      {!isLoading ?
        <main className="mb-10">
          <DataTitle text={data.title} dataDate={data.dataDate} />
          <DataBoxes stats={data.stats} />
          <CountrySelect countries={data.countries} handleOnChange={handleOnChange} selected={selected}/>
          {data.stats.Country &&
            <button className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600" onClick={handleOnclick}>
              Clear Country
            </button>
          }
        </main>
        :
        <main className="flex flex-col align-center justify-center text-center">
          <div className="text-gray-500 text-3xl mt-10 mb-6">
            Fetching Data
          </div>
          <img src={loadingImage} className="w-24 m-auto" alt="" />
          {//<img src ={require('../assets/hourglass.gif').default} className="w-24 m-auto" alt="" />
          }
        </main>
      }
    </>
  );
}

export default Home;