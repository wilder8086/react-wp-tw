import React from 'react';

import bg from "./img/bg.jpg";


const Main = () => {
  return (
    <div className="bg-auto h-auto text-white py-24 px-10 mt-5 mx-2" style={{ backgroundImage: `url(${bg})` }}>
    <div className="md:w-1/2">

      <p className="font-bold text-sm uppercase">Experiencias</p>
      <p className="text-3xl font-bold">Porque no viajas para dormir</p>
      <p className="text-2xl mb-10 leading-none">Actividades memorables organizadas por habitantes locales, creadas para personas curiosas.</p>
      <a href="#" className="bg-white py-4 px-8 text-black font-bold uppercase text-xs rounded">Más Información</a>
    </div>
  </div>
  );
}

export default Main;