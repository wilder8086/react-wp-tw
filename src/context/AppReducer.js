
const addReducer = (state, {type, payload}) => {

  switch (type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
      };
    case 'UPDATE_TASK':
      const updateTask = payload;
      const updateTasks = state.tasks.map((task) => {
        if (task.id === updateTask.id) {
          task.title = updateTask.title;
          task.description = updateTask.description;
        }
        return task;
      });
      return {
        ...state,
        tasks: updateTasks,
      };
    case 'TOGGLE_TASK_DONE':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === payload ? {...task, done: !task.done} : task),
      };

    default:
      return state;
  }
}

export default addReducer;