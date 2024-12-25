import { useState, FormEvent } from "react";
import "../index.css";

interface FormProps {
  addTodo: (title: string, isUrgent: boolean) => void;
}

function Form({ addTodo }: FormProps) {
  const [title, setTitle] = useState<string>("");
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(title, isUrgent);
    setTitle("");
    setIsUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Todo here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={() => setIsUrgent(!isUrgent)}
        />
        Urgent
      </label>
      <button type="submit" disabled={!title.trim()}>
        Add Todo
      </button>
    </form>
  );
}

export default Form;
