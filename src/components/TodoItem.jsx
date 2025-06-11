import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();
  const [isEditable, setisEditable] = useState(false);
  const [todoMsg, settodoMsg] = useState(todo.todo);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setisEditable(false);
  };
  return (
    <div
      className={`flex items-center justify-between w-full px-4 py-2 border rounded ${
        todo.completed ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      {isEditable ? (
        <input
          type="text"
          value={todoMsg}
          onChange={(e) => settodoMsg(e.target.value)}
          className="flex-1 mr-2 px-2 py-1 rounded border border-gray-300 text-black"
        />
      ) : (
        <span className="flex-1 mx-2">{todo.todo}</span>
      )}
      <div className="flex gap-2">
        {isEditable ? (
          <button onClick={handleUpdate} className="text-green-600">
            ✅
          </button>
        ) : (
          <button
            onClick={() => setisEditable(true)}
            className="text-yellow-500"
          >
            ✏️
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-600">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
