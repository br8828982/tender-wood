import "./App.css";
import TodoApp from "./components/TodoApp";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
