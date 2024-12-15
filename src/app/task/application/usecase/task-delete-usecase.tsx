import { Task } from '../../domain/entities/task';
import { TaskRepositoryInterface } from '../../domain/interfaces/task-repository-interface';

export interface TaskDeleteUserCaseInterface {
  execute(task: Task): Promise<void>;
}

export class TaskDeleteUserCase implements TaskDeleteUserCaseInterface {
  private readonly taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(task: Task): Promise<void> {
    this.taskRepository.delete(task);
  }
}
