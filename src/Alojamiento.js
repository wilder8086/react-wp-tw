import React from 'react';



const Alojamiento = ({ data }) => {
  console.log(data.hospedajes);
  return (
    <section className="alojamientos mt-5">
      <h2 className="encabezado">{data.title}</h2>
      <div className="md:flex md:justify-between">
        {
          data.hospedajes.map( (h) => {

              console.log('imagen : ', h.url)
            
            return ( <div className="mx-2 mb-3 flex-1" key={h.id}>
              <img src={h.url} className="mx-auto" />
              <div className="mt-3 text-center md:text-left leading-relaxed">
                <p className="text-xs font-bold uppercase text-gray-600 ">{h.title}</p>
                <p className="text-base font-bold text-gray-800 ">{h.title}</p>
                <p className="text-gray-600 text-sm">{h.price}</p>
              </div>
            </div>)
          })
        }
      </div>
    </section>
  );
}

export default Alojamiento;