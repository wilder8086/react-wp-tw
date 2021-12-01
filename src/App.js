import React from "react";
import ReactDOM from "react-dom";
//import {  Routes, Route, useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ContextProvider } from './context/GlobalContext'


import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import './styles.css';

const App = () => {

  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Router>
              <Heading />
              <Routes>

                <Route exact path="/" element={<TaskList />} />
                <Route exact path="/add" element={<TaskForm />} />
                <Route exact path="/edit/:id" element={<TaskForm />} />
              </Routes>
            </Router>
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;