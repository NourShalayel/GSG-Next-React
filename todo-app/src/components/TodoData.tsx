import { Todo } from "../App";
import "../index.css";

interface TodoDataProps {
  todos: Todo[];
}

function TodoData({ todos }: TodoDataProps) {
  const createdCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const urgentCount = todos.filter((todo) => todo.isUrgent).length;

  return (
    <div className="todo-data">
      <div>Created tasks: {createdCount}</div>
      <div>Completed tasks: {completedCount}</div>
      <div>Urgent tasks: {urgentCount}</div>
    </div>
  );
}

export default TodoData;
