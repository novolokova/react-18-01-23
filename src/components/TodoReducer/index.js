import React from "react";
import { useReducer } from "react";
import { Formik, Form, Field } from "formik";
import reducer from "./reducer";
import { TASK_SCHEMA } from "../../utils/validationSchemas";

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [{ id: Date(), body: "test", isDone: false }],
  });
  const onSubmit = (values, formikBag) => {
    dispatch({ type: "ADD_TASK", payload: values.body });
    formikBag.resetForm();
  };
  const handlerDelet = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const handlerIsDone = (id) => {
    dispatch({ type: "IS_DONE_TASK", payload: id });
  };
  const selectValue = ({ target }) => target.value;
  const mapTasks = (task) => (
    <article key={task.id}>
      <p>
        <input
          type="checkbox"
          name="isDone"
          checked={task.isDone}
          onChange={() => handlerIsDone(task.id)}
        />
        {task.body}
        <button onClick={() => handlerDelet(task.id)}>X</button>
      </p>
    </article>
  );

  // const options = [
  //   { label: "All", value: "All" },
  //   { label: "Do", value: "Do" },
  //   { label: "Done", value: "Done" },
  // ];

  // const handleChange = ({ target }) => {
  //   console.log(target.value);
  // };

  return (
    <div>
      <section>
        <h3>New task</h3>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ body: "" }}
          validationSchema={TASK_SCHEMA}
        >
          <Form>
            <Field name="body" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </section>
      <section>
        {/* <select value="value" onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
      </section>
      <section>{state.tasks.map(mapTasks)}</section>
    </div>
  );
};

export default TodoReducer;
