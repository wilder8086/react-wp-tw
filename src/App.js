import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import './styles.css';
import { CovidState } from "./context/CovidState";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <CovidState>
          <Home />
        </CovidState>
      </div>
    </>
  )
}

export default App;