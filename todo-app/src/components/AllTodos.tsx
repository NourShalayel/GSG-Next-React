import { Todo } from "../App";
import TodoItem from "./TodoItem";
import "../index.css";

interface AllTodosProps {
  todos: Todo[];
  toggleCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function AllTodos({ todos, toggleCompletion, deleteTodo }: AllTodosProps) {
  return (
    <div className="all-todos">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompletion={toggleCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default AllTodos;
