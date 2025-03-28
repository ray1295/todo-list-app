export interface TodoItem {
  id: string;
  summary: string;
  description?: string;
  completeBy?: Date;
  priority: 1 | 2 | 3;
  isCompleted: boolean;
}
