import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// setting types of todos
interface Todos {
  description: string;
}

const App: React.FC = () => {
  // useState<Todos[]>([])  indicate state needs to be an array of todos
  const [data, setData] = useState<Todos[]>([]);

  // set type of parameter that you will be adding. todo parameter is type of Todos
  const addNewTodo = (todo: Todos) => {
    setData([...data, todo]);
  };

  return (
    <div>
      <h2>Todo list App!</h2>
      <TodoInput addNewTodo={addNewTodo} />
      <TodoList data={data} />
    </div>
  );
};

export default App;
