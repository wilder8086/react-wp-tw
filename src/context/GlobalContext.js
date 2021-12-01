import React, { createContext, useReducer } from 'react';
import addReducer from './AppReducer';
import { v4 } from 'uuid'

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'one',
      description: 'some description',
      done: false,
    },

    {
      id: 2,
      title: 'two',
      description: 'two some description',
      done: false,
    },
  ],
}

export const GlobalContext = createContext(initialState);


// un provider es un componente de react ,q me permite englobar el resto de componentes.
// Basicamente es un componente padre y que sus componentes hijos pueden acceder al state del componente padre 
// en este caso los hijos son los children
// es ser un rpoveedor para almacenar un state y darselos a sus hijos
export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(addReducer, initialState)

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: { ...task, id: v4(), done: false } });

  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });

  const updateTask = (updatedTask) => dispatch({ type: 'UPDATE_TASK', payload: updatedTask });

  const toggleTaskDone = (id) => dispatch({ type: 'TOGGLE_TASK_DONE', payload: id });


  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}>
      {children}
    </GlobalContext.Provider>
  );
};
