import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import loadingImage from '../assets/hourglass.gif';
import CountrySelect from '../components/CountrySelect';
import DataBoxes from '../components/DataBoxes';
import DataTitle from '../components/DataTitle';

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

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(initialState);

  const { globalState } = useContext(GlobalContext)

  console.log("globalstate", globalState);

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
        selected: {
          ID: country.ID,
          value: country.Country
        }
      });
    } else {
      getData();
    }

  }

  const handleOnClick = () => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }
  
  console.log("Render Home");
  return (
    <>
      {!isLoading ?
        <main className="mb-10">
          <DataTitle text={data.title} dataDate={data.dataDate} />
          <DataBoxes stats={data.stats} />
          <CountrySelect countries={data.countries} handleOnChange={handleOnChange} selected={data.selected}/>
          {data.stats.Country &&
            <button className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600" onClick={handleOnClick}>
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