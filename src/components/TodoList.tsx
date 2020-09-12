import React from "react";

interface Todos {
  description: string;
}

interface Props {
  data: Array<Todos>;
}
const TodoList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((todo: Todos, i: number) => (
          <p key={i}>{todo.description}</p>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
