import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Main() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>SR Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}