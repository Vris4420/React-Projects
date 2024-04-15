import { useState } from "react";
import "./style.css";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    if (newTodoName === "") return;

    setTodos((currentTodos) => {
      return [
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
        ...currentTodos,
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <div className="app-container">
      <div className="todo-input-container">
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button onClick={addNewTodo} className="add-button">
          +
        </button>
      </div>
      <div className="todo-list-container">
        <ul id="list" className="todo-list">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className={`list-item ${todo.completed ? "completed" : ""}`}>
                <label className="list-item-label">
                  <input
                    checked={todo.completed}
                    type="checkbox"
                    className="todo-checkbox"
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  <span className="todo-text">{todo.name}</span>
                </label>
                <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
