export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  created_at: Date;
}

export type TaskStatus = "pending" | "in-progress" | "completed";
export type Priority = Task["priority"];
