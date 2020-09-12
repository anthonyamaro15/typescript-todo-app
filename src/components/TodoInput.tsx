import React, { useState } from "react";

// setting Todos types
interface Todos {
  description: string;
}

// getting the Props that we are receiving from App component
// addNewTodo is a function which parameter is an object of Todos and return nothing.
interface Props {
  addNewTodo: (obj: Todos) => void;
}

// React.FC<Props>
// this is how we get the props that we are passing. then we can destructure values the same way as wiht JS
const TodoInput: React.FC<Props> = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState({ description: "" });

  // Need to set the type of the event. just type event and hover over to see how to fix the problem;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, description: e.target.value });
  };

  // same as the one above, just hover over the error to see how to fix it.
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addNewTodo(newTodo);
    setNewTodo({ ...newTodo, description: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            value={newTodo.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
