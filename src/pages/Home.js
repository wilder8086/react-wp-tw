import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import loadingImage from '../assets/hourglass.gif';
import CountrySelect from '../components/CountrySelect';
import DataBoxes from '../components/DataBoxes';
import DataTitle from '../components/DataTitle';

const Home = () => {
  const { loading, stats, setState } = useContext(GlobalContext);

  useEffect(() => {
    //setState({ loading: true});
    if(!loading)
    getSummary()
    //setIsLoading(false);
  }, []); // [] se va ejecutar la primera vez

  const getSummary = async () => {
    let res = await fetch('https://api.covid19api.com/summary');
    let dataResponse = await res.json();
    console.log("Llamando a getData() : ", dataResponse);

    setState({
      title: 'Global',
      dataDate: dataResponse.Date,
      countries: dataResponse.Countries,
      stats: dataResponse.Global,
      selected: {
        ID: 0,
        value: 'Select country'
      }
    });
  }

  const handleOnClick = () => {
    //setState({ loading: true});
    if(!loading)
    getSummary();
    //setState({ loading: false});
  }

  console.log("Render Home");
  return (
    <>
      {!loading ?
        <main className="mb-10">
          <DataTitle />
          <DataBoxes />
          <CountrySelect getSummary={getSummary}/>
          {stats.Country &&
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