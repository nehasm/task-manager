import React from "react";
import { tasks } from "../tasks";

interface taskProps {
  id: number;
  category: string;
  title: string;
  status: string;
  description: string;
  onTaskComplete: (id: number) => void;
  onTaskDelete: (id: number) => void;
}
const TaskItem = ({
  id,
  category,
  title,
  status,
  description,
  onTaskComplete,
  onTaskDelete,
}: taskProps) => {
  return (
    <div
      className={`task-item ${status === "completed" ? "task-bg-green" : ""}`}
    >
      <div>{title}</div>
      <div>{description}</div>
      {status === "pending" && (
        <button onClick={() => onTaskComplete(id)}>done</button>
      )}
      <button onClick={() => onTaskDelete(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
