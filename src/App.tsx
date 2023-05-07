import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

//초기 상태 설정
const initialTodos: Array<Todo> = [
  { text: "밥 먹기", complete: true },
  { text: "청소하기", complete: false },
];

//App 컴포넌트를 React.Fc로 만든다.
const App: React.FC = () => {
  //useState로 todos 관리
  const [todos, setTodos] = useState(initialTodos);

  //toggleTodo함수 : ToggleTodo의 타입을 가지고, selectedTodo를 파라미터 값으로 가진다.
  //newTodos는 todos에서 map을 돌려, 만약 selectedTodo와 todo가 같다면 todo.complete 상태를 반대로 바뀌게 한다.
  //setTodos에는 newTodos를 담아준다.
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //addTodo함수는 Addtodo 타입을 가지고, newTodo를 파라미터로 가진다.
  //setTodos에 원래 todos를 복사하여 담고, text는 newTodo, complete는 false로 담는다.
  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
