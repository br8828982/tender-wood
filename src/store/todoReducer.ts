import { Todo, TodoAction, TodoActionTypes } from "../types/TodoTypes";

export const initialTodos: Todo[] = [
  {
    id: 1,
    text: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    text: "Todo 2",
    complete: true,
  },
];

export function createNewTodo(text: string): Todo {
  return {
    id: new Date().getTime(),
    text,
    complete: false,
  };
}

export function addTodo(todo: Todo): TodoAction {
  return {
    type: TodoActionTypes.ADD,
    todo,
  };
}

export function editTodo(id: number, text: string): TodoAction {
  return {
    type: TodoActionTypes.EDIT,
    id,
    text,
  };
}

export function toggleTodo(id: number, complete: boolean): TodoAction {
  return {
    type: TodoActionTypes.TOGGLE,
    id,
    complete,
  };
}

export function deleteTodo(id: number): TodoAction {
  return {
    type: TodoActionTypes.DELETE,
    id,
  };
}

export function todoReducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case "ADD":
      return [...state, action.todo];
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo,
      );
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: action.complete } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
