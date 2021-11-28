import React from 'react';

import mejores1 from "./img/mejores1.jpg";
import mejores2 from "./img/mejores2.jpg";
import mejores3 from "./img/mejores3.jpg";

const Destacado = () => {
  return (
    <section className="destinos-detacados mt-5">
    <h2 className="encabezado mb-0">Destinos Destacados</h2>
    <p className="text-lg mb-3 text-gray-700 mx-2">Explora fantásticos alojamientos con todas las comodidades de tu hogar y mucho más</p>
    <div className="md:flex md:justify-between">
      <div className="mx-2 mb-3 flex-1">
        <img src={`${mejores1}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-pink-700 ">Más de 800 alojamientos verificados</p>
          <p className="text-gray-600 text-sm">Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${mejores2}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-pink-700 ">Más de 800 alojamientos verificados</p>
          <p className="text-gray-600 text-sm">Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?</p>
        </div>
      </div>

      <div className="mx-2 mb-3 flex-1">
        <img src={`${mejores3}`} className="mx-auto" />
        <div className="mt-3 text-center md:text-left leading-relaxed">
          <p className="text-xs font-bold uppercase text-pink-700 ">Más de 800 alojamientos verificados</p>
          <p className="text-gray-600 text-sm">Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?</p> 
        </div>
      </div>                    
    </div>
  </section> 
  );
}

export default Destacado;