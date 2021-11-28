import React from 'react';

import actividad1 from "./img/actividad1.jpg";
import actividad2 from "./img/actividad2.jpg";
import actividad3 from "./img/actividad3.jpg";
import actividad4 from "./img/actividad4.jpg";
import actividad5 from "./img/actividad5.jpg";

const Experiencia = () => {
  return (
    <section className="experiencias-en-nueva-york mt-5">
    <h2 className="encabezado">Experiencias en Nueva York</h2>
    <div className="md:flex md:justify-between">
      <div className="mx-2 mb-3 flex-1">
        <img src={`${actividad1}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-gray-600 ">Clase de baile</p>
          <p className="text-base font-bold text-gray-800 ">Clase de baile en Brooklyn</p>
          <p className="text-gray-600 text-sm">$ 600 $$ por persona</p>
          <p className="text-gray-500 text-xs">Todos los idiomas</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${actividad2}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-gray-600 ">Concierto</p>
          <p className="text-base font-bold text-gray-800 ">Música Electronica NY2021</p>
          <p className="text-gray-600 text-sm">$ 200 $$ por persona</p>
          <p className="text-gray-500 text-xs">Todos los idiomas</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${actividad3}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-gray-600 ">De Bar en Bar</p>
          <p className="text-base font-bold text-gray-800 ">Recorrido por bares de Nueva York</p>
          <p className="text-gray-600 text-sm">$ 300 $$ por persona</p>
          <p className="text-gray-500 text-xs">Todos los idiomas</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${actividad4}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-gray-600 ">Paseo</p>
          <p className="text-base font-bold text-gray-800 ">Paseo a caballo</p>
          <p className="text-gray-600 text-sm">$ 150 $$ por persona</p>
          <p className="text-gray-500 text-xs">Todos los idiomas</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${actividad5}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-gray-600 ">Clase de baile</p>
          <p className="text-base font-bold text-gray-800 ">Clase de baile en Brooklyn</p>
          <p className="text-gray-600 text-sm">$ 600 $$ por persona</p>
          <p className="text-gray-500 text-xs">Todos los idiomas</p>
        </div>
      </div>          
    </div>
  </section>
  );
}

export default Experiencia;