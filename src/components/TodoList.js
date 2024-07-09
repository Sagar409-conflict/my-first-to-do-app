import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const response = {
    date: [
      {
        text: "Todos",
        completd: true,
      },
    ],
  };
  const fetchTodos = async () => {
    // const response = await axios.get("http://localhost:5000/api/todos");
    // setTodos(response.data);
  };
  console.log(todos, "todos");
  const addTodo = async (text) => {
    // const response = await axios.post("http://localhost:5000/api/todos", { text });
    console.log(":todos ", todos);
    setTodos([...todos, { text: text }]);
  };

  const updateTodo = async (id, updatedTodo) => {
    console.log("updateTodo");
    // const response = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
    setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
  };

  const deleteTodo = async (id) => {
    console.log("deleteTodo ");
    // await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos?.map((todo) => (
        <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
