import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const onHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={onHandler} />
      <button type="submit" onClick={onSubmitHandler}>
        Add Todo
      </button>
    </form>
  );
};
