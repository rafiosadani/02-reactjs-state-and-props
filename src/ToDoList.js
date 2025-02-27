import React from "react";
import { TaskItem } from "./TaskItem";

export function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Task"
          style={{
            minWidth: "500px",
            padding: "5px",
            marginRight: "10px",
          }}
        />
        <button onClick={handleAddTask} style={{ padding: "5px 20px" }}>
          Add Task
        </button>
      </div>

      {tasks.length > 0 ? (
        <ol
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "0",
            margin: "10px 0 0 0",
          }}
        >
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </ol>
      ) : (
        <p
          style={{
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            padding: "5px 0",
          }}
        >
          Tidak Ada Tugas
        </p>
      )}
    </div>
  );
}
