import React from "react";
import { TodoListItem } from "./TodoListItem";

//TodoListProps interface를 만든다.
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
