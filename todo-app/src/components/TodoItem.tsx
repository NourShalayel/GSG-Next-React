import { Todo } from "../App";
import "../index.css";

interface TodoItemProps {
  todo: Todo;
  toggleCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleCompletion, deleteTodo }: TodoItemProps) {
  return (
    <div className={`todo-item ${todo.isUrgent ? "urgent" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(todo.id)}
      />
      <span>{todo.title}</span>
      {todo.isUrgent && <span className="urgent-indicator">Urgent</span>}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
