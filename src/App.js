import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import './styles.css';
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
      </div>
    </>
  )
}

export default App;