import React from "react";
import { Task, TaskStatus } from "../types";

interface TaskItemProps {
  task: Task;
  moveTask: (taskId: number, direction: "left" | "right") => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, moveTask }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        margin: "10px 0",
        minHeight: "60px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        wordBreak: "break-word",
      }}
    >
      <button
        onClick={() => moveTask(task.id, "left")}
        disabled={task.status === TaskStatus.Todo}
        style={{
          backgroundColor:
            task.status === TaskStatus.Todo ? "#ffcccb" : "#dc3545",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          marginRight: "10px",
          flexShrink: 0,
          cursor: task.status === TaskStatus.Todo ? "not-allowed" : "pointer",
        }}
      >
        ←
      </button>
      <span
        style={{
          flex: 1,
          padding: "0 5px",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => moveTask(task.id, "right")}
        disabled={task.status === TaskStatus.Done}
        style={{
          backgroundColor:
            task.status === TaskStatus.Done ? "#90EE90" : "#28a745",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          marginLeft: "10px",
          flexShrink: 0,
          cursor: task.status === TaskStatus.Done ? "not-allowed" : "pointer",
        }}
      >
        →
      </button>
    </div>
  );
};
