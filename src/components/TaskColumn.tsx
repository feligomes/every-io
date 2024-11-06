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
      role="region"
      aria-labelledby={`${status}-column-heading`}
      style={{
        flex: 1,
        padding: "20px",
        minWidth: "250px",
      }}
    >
      <h2 id={`${status}-column-heading`}>{status}</h2>
      <ul
        aria-label={`${status} tasks`}
        style={{ listStyle: 'none', padding: 0, margin: 0 }}
      >
        {columnTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} moveTask={moveTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};
