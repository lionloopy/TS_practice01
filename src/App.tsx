import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "밥 먹기", complete: true },
  { text: "옷 입기", complete: false },
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
};

export default App;
