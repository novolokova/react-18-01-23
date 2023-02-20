import TYPE_ACTIONS from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ACTIONS.ADD_TASK: {
      const newTask = {
        id: Date.now(),
        isDone: false,
        body: action.payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case TYPE_ACTIONS.DELETE_TASK: {
      const { payload: id } = action;
      return {
        ...state,
        tasks: state.tasks.filter((task) => id !== task.id),
      };
    }
    case TYPE_ACTIONS.IS_DONE_TASK: {
      const { payload: id } = action;
      return {
        tasks: state.tasks.map((task) =>
          id === task.id ? { ...task, isDone: !task.isDone } : task
          // isDone: !task.isDone - коли треба поміняти на протилежне
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
