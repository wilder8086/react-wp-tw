import React from 'react';

const Experiencia = ({ data }) => {

  return (
    <section className="experiencias-en-nueva-york mt-5">
      <h2 className="encabezado">{data.title}</h2>
      <div className="md:flex md:justify-between">
        {
          data.actividades.map(a => {
            return (
              <div className="mx-2 mb-3 flex-1" key={a.id}>
                <img src={a.url} className="mx-auto" />
                <div className="mt-3 text-center md:text-left leading-relaxed">
                  <p className="text-xs font-bold uppercase text-gray-600 ">{a.category}</p>
                  <p className="text-base font-bold text-gray-800 ">{a.activity}</p>
                  <p className="text-gray-600 text-sm">{a.price}</p>
                  <p className="text-gray-500 text-xs">{a.language}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Experiencia;