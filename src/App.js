import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import Main from "./Main";
import Alojamiento from './Alojamiento'
import Experiencia from "./Experiencia";
import Destacado from "./Destacado";

const alojamiento = {
  title: "Alojamientos en Nueva York",
  hospedajes : [
    {
      id: 0,
      url:'./img/hospedaje1.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Departamento de lujo en Manhatan',
      price:'$ 1000 $$ por persona'
    },
    {
      id: 1,
      url:'./img/hospedaje1.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Estudio completo en el centro de New york',
      price:'$ 2200 $$ por persona'
    },
    {
      id: 2,
      url:'./img/hospedaje1.jpg',
      title:"Departamento - Nueva York",
      subtitle:'Departamento con elevador e increible vista',
      price:'$ 2400 $$ por persona'
    },
    {
      id: 3,
      url:'./img/hospedaje1.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Ubicado en el corazon de Nueva York',
      price:'$ 1300 $$ por persona'
    }        
  ]
};



const App = () => {
  return (
    <div className="container mx-auto">
      <Main/>
      <Alojamiento data={alojamiento}/>
      <Experiencia/>
      <Destacado/>
    </div >
  );
};

export default App;