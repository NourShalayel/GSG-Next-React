import  { useState } from "react";
import Form from "./components/Form";
import TodoData from "./components/TodoData";
import AllTodos from "./components/AllTodos";
import "./index.css";

export interface Todo {
  id: number;
  title: string;
  isUrgent: boolean;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, isUrgent: boolean) => {
    if (!title.trim()) return; 
    setTodos([
      ...todos,
      { id: Date.now(), title, isUrgent, completed: false },
    ]);
  };

  const toggleCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <TodoData todos={todos} />
      <AllTodos
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
