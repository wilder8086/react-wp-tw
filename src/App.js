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
      url:'./assets/images/hospedaje1.jpg',
      image:'hospedaje1.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Departamento de lujo en Manhatan',
      price:'$ 1000 $$ por persona'
    },
    {
      id: 1,
      url:'./assets/images/hospedaje2.jpg',
      image: 'hospedaje2.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Estudio completo en el centro de New york',
      price:'$ 2200 $$ por persona'
    },
    {
      id: 2,
      url:'./assets/images/hospedaje3.jpg',
      image: 'hospedaje1.jpg',
      title:"Departamento - Nueva York",
      subtitle:'Departamento con elevador e increible vista',
      price:'$ 2400 $$ por persona'
    },
    {
      id: 3,
      url:'./assets/images/hospedaje4.jpg',
      image: 'hospedaje1.jpg',
      title:"Habitacion sencilla - Nueva York",
      subtitle:'Ubicado en el corazon de Nueva York',
      price:'$ 1300 $$ por persona'
    }        
  ]
};

const experiencia = {
  title: "Experiencias en Nueva York",
  actividades : [
    {
      id: 0,
      url:"./assets/images/actividad1.jpg",
      category:"Clase de baile",
      activity:'Clase de baile en Brooklyn',
      price:'$ 600 $$ por persona',
      language: 'Todos los idiomas'
    },
    {
      id: 1,
      url:"./assets/images/actividad2.jpg",
      category:"Concierto",
      activity:'Música Electronica NY2021',
      price:'$ 200 $$ por persona',
      language: 'Todos los idiomas'
    },
    {
      id: 2,
      url:"./assets/images/actividad3.jpg",
      category:"De Bar en Bar",
      activity:'Recorrido por bares de Nueva York',
      price:'$ 300 $$ por persona',
      language: 'Todos los idiomas'
    },
    {
      id: 3,
      url:"./assets/images/actividad4.jpg",
      category:"Cocina",
      activity:'Clase de cocina',
      price:'$ 150 $$ por persona',
      language: 'Todos los idiomas'
    },
    {
      id: 4,
      url:"./assets/images/actividad5.jpg",
      category:"Paseo",
      activity:'Paseo a caballo',
      price:'$ 600 $$ por persona',
      language: 'Todos los idiomas'
    }           
  ]
};

const destacado = {
  title: "Destinos Destacados",
  overview: "Explora fantásticos alojamientos con todas las comodidades de tu hogar y mucho más",
  destacados : [
    {
      id: 0,
      url:'./assets/images/mejores1.jpg',
      title:"Más de 800 alojamientos verificados",
      feature:'Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?',
    },
    {
      id: 1,
      url:'./assets/images/mejores2.jpg',
      title:"Más de 800 alojamientos verificados",
      feature:'Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?',
    },
    {
      id: 2,
      url:'./assets/images/mejores3.jpg',
      title:"Más de 800 alojamientos verificados",
      feature:'Voluptates nobis aspernatur reiciendis fugiat dolores quam, rem ipsa ab, fuga sapiente veniam tenetur laudantium tempore optio provident quas neque ipsum culpa?',
    },  
  ]
};

const airbnb = {
  bg_url: './assets/images/bg.jpg',
  alojamiento: alojamiento,
  experiencia: experiencia,
  destacado: destacado,
}

const App = () => {
  return (
    <div className="container mx-auto">
      <Main imagen={airbnb.bg_url}/>
      <Alojamiento data={airbnb.alojamiento}/>
      <Experiencia data={airbnb.experiencia}/>
      <Destacado data={airbnb.destacado}/>
    </div >
  );
};

export default App;