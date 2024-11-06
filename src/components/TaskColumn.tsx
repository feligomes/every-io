import React from "react";
import { TaskStatus, Task } from "../types";
import { TaskItem } from "./TaskItem";

interface TaskColumnProps {
  status: TaskStatus;
  tasks: Task[];
  moveTask: (taskId: number, direction: "left" | "right") => void;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({
  status,
  tasks,
  moveTask,
}) => {
  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        minWidth: "250px",
      }}
    >
      <h2>{status}</h2>
      {columnTasks.map((task) => (
        <TaskItem key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};
