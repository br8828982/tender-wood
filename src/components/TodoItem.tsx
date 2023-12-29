import { useState } from "react";
import { Todo } from "../types/TodoTypes";
import { useTodoContext } from "../hooks/useTodoContext";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const { onDeleteTodo, onToggleTodo, onEditTodo } = useTodoContext();

  const handleSave = () => {
    const trimmedText = newText.trim();
    if (trimmedText === "" || trimmedText === todo.text) return;
    onEditTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(todo.text);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(e) => onToggleTodo(todo.id, e.target.checked)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
