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
  payload: Pick<Todo, "text">;
}

interface EditTodoAction {
  type: TodoActionTypes.EDIT;
  payload: Pick<Todo, "id" | "text">;
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE;
  payload: Pick<Todo, "id" | "complete">;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE;
  payload: Pick<Todo, "id">;
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
