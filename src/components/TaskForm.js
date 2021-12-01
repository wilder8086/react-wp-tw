import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom'

const Taskform = () => {
  // importamos el GlobalContext , el contexto creado
  // y usamos useContext para usar el contexto global
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams()

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: ''
  })


  const handleChange = e => (
    // ...task = copio lo que tengo en task 
    // [e.target.name]: e.target.value = actualizo
    setTask({ ...task, [e.target.name]: e.target.value })
  )

  const handleSubmit = e => {
    // el submit de un formulario lo que hace por default hace es reiniciar la pagina y se usa e.preventdefualt
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }  
    navigate("/")
  }

  useEffect(() => {
    const taskFound = tasks.find(task => task.id == id);
    console.log(" FoundTask ", taskFound);
    if (taskFound) {
      setTask(taskFound);
    }

  }, [id, tasks])


  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1">{task.id ? 'Editing a' : 'Creating a'} task</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleChange}
            value={task.title}
            className="py-3 px-4 focus:online-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="write to description"
            onChange={handleChange}
            value={task.description}
            className="py-3 px-4 focus:online-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded">
          {task.id ? 'Edit' : 'Create'} Task
        </button>
      </form>

    </div>
  );
}

export default Taskform;