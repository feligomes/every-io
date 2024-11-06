import React, { useState } from "react";
import { TaskStatus, Task } from "./types";
import { TaskColumn } from "./components/TaskColumn";

export const ChallengeComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Mow The lawn", status: TaskStatus.Todo },
    { id: 2, text: "Pull Weeds", status: TaskStatus.InProgress },
    { id: 3, text: "Rake the leaves", status: TaskStatus.Done },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const statusOrder = [TaskStatus.Todo, TaskStatus.InProgress, TaskStatus.Done];

  const moveTask = (taskId: number, direction: "left" | "right") => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === taskId) {
          const currentIndex = statusOrder.indexOf(task.status);
          const newIndex =
            direction === "right"
              ? Math.min(currentIndex + 1, statusOrder.length - 1)
              : Math.max(currentIndex - 1, 0);
          return { ...task, status: statusOrder[newIndex] };
        }
        return task;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) {
      alert("Task cannot be empty");
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        text: newTaskText.trim(),
        status: TaskStatus.Todo,
      },
    ]);
    setNewTaskText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {statusOrder.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks}
            moveTask={moveTask}
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add Task"
          style={{
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flex: 1,
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          +
        </button>
      </form>
    </div>
  );
};
