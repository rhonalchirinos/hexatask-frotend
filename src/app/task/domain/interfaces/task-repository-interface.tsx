import { Task } from '../entities/task';

export interface TaskRepositoryInterface {
  all(): Promise<unknown[]>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  delete(task: Task): Promise<Task>;
  show(id: number): Promise<unknown>;
}
