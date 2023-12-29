import { Todo, TodoAction, TodoActionTypes } from "../types/TodoTypes";

export const initialTodos: Todo[] = [
  {
    id: 1703879199946,
    text: "Todo 1",
    complete: false,
  },
  {
    id: 1703879214746,
    text: "Todo 2",
    complete: true,
  },
];

export function addTodo(text: string): TodoAction {
  return {
    type: TodoActionTypes.ADD,
    payload: { text },
  };
}

export function editTodo(id: number, text: string): TodoAction {
  return {
    type: TodoActionTypes.EDIT,
    payload: { id, text },
  };
}

export function toggleTodo(id: number, complete: boolean): TodoAction {
  return {
    type: TodoActionTypes.TOGGLE,
    payload: { id, complete },
  };
}

export function deleteTodo(id: number): TodoAction {
  return {
    type: TodoActionTypes.DELETE,
    payload: { id },
  };
}

export function todoReducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.payload.text,
          complete: false,
        },
      ];
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: action.payload.complete }
          : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
