import { createContext, ReactNode, useReducer } from "react";
import { TodoContextType } from "../types/TodoTypes";
import {
  todoReducer,
  initialTodos,
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
} from "../store/todoReducer";

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const onAddTodo = (newText: string) => {
    dispatch(addTodo(newText));
  };

  const onEditTodo = (todoId: number, newText: string) => {
    dispatch(editTodo(todoId, newText));
  };

  const onToggleTodo = (todoId: number, isDone: boolean) => {
    dispatch(toggleTodo(todoId, isDone));
  };

  const onDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const contextValue: TodoContextType = {
    todos,
    onAddTodo,
    onEditTodo,
    onToggleTodo,
    onDeleteTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
