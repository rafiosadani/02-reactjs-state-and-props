export function TaskItem({ task, index, handleRemoveTask }) {
  return (
    <li
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        border: "1px solid #ccc",
      }}
    >
      <span>
        {index + 1}. {task}
      </span>
      <button onClick={() => handleRemoveTask(index)}>Remove</button>
    </li>
  );
}
