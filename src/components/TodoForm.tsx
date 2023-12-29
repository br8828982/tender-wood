import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

function TodoForm() {
  const [newText, setNewText] = useState<string>("");

  const { onAddTodo } = useTodoContext();

  const handleAdd = () => {
    const trimmedText = newText.trim();
    if (trimmedText === "") return;
    onAddTodo(trimmedText);
    setNewText("");
  };

  return (
    <>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default TodoForm;
