const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: Date.now(),
        isDone: false,
        body: action.payload,
      };
      const newState = { ...state, tasks: [...state.tasks, newTask] };
      return newState;
    }
    case "DELETE_TASK": {
      const { payload: id } = action;
      return {
        ...state,
        tasks: state.tasks.filter((task) => id !== task.id),
      };
    }
    case "IS_DONE_TASK": {
      const { payload: id } = action;
      return {
        tasks: state.tasks.map((task) =>
          id === task.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
