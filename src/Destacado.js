import React from 'react';

const Destacado = ({ data }) => {
  return (
    <section className="destinos-detacados mt-5">
      <h2 className="encabezado mb-0">{data.title}</h2>
      <p className="text-lg mb-3 text-gray-700 mx-2">{data.overview}</p>
      <div className="md:flex md:justify-between">
        {
          data.destacados.map(d => {
            return (
              <div className="mx-2 mb-3 flex-1" key={d.id}>
                <img src={d.url} className="mx-auto" />
                <div className="mt-3 text-center md:text-left leading-relaxed">
                  <p className="text-xs font-bold uppercase text-pink-700 ">{d.title}</p>
                  <p className="text-gray-600 text-sm">{d.feature}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Destacado;