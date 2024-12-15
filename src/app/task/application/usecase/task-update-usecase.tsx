import { Task } from '../../domain/entities/task';
import { TaskRepositoryInterface } from '../../domain/interfaces/task-repository-interface';

export interface TaskUpdateUserCaseInterface {
  execute(task: Task): Promise<Task>;
}

export class TaskUpdateUserCase implements TaskUpdateUserCaseInterface {
  private readonly taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(task: Task): Promise<Task> {
    return this.taskRepository.update(task);
  }
}
