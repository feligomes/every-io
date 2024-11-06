export enum TaskStatus {
  Todo = "Todo",
  InProgress = "In Progress",
  Done = "Done",
}

export interface Task {
  id: number;
  text: string;
  status: TaskStatus;
}
