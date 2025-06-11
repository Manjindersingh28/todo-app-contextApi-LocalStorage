import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todoMsg, settodoMsg] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoMsg.trim()) return;
    addTodo({ todo: todoMsg, completed: false });
    settodoMsg("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full mb-4">
        <input
          type="text"
          value={todoMsg}
          onChange={(e) => settodoMsg(e.target.value)}
          placeholder="Enter todo"
          className="flex-1 px-4 py-2 rounded border border-gray-300 text-black"
        />
        <button
          type="Submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
