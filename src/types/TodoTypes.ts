export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export enum TodoActionTypes {
  ADD = "ADD",
  EDIT = "EDIT",
  TOGGLE = "TOGGLE",
  DELETE = "DELETE",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD;
  todo: Todo;
}

interface EditTodoAction {
  type: TodoActionTypes.EDIT;
  id: number;
  text: string;
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE;
  id: number;
  complete: boolean;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE;
  id: number;
}

export type TodoAction =
  | AddTodoAction
  | EditTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;

export interface TodoContextType {
  todos: Todo[];
  onAddTodo: (newTodo: string) => void;
  onEditTodo: (todoId: number, newText: string) => void;
  onToggleTodo: (todoId: number, isDone: boolean) => void;
  onDeleteTodo: (todoId: number) => void;
}
