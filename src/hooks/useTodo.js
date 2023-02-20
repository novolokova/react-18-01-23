import { useState } from "react";

const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (values) =>
    setTasks([...tasks, { id: Date.now(), body: values, isDone: false }]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const isDoneTask = (id) => {
    setTasks(tasks.map((task) => task.id === id? { ...task, isDone: !task.isDone }: task ));
  };
  return { tasks, addTask, deleteTask, isDoneTask };
};

export default useTodo;
