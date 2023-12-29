import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../types/TodoTypes";

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
