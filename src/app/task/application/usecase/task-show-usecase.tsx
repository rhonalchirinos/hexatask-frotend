import { Tag } from '../../domain/entities/tag';
import { Task } from '../../domain/entities/task';
import { TaskRepositoryInterface } from '../../domain/interfaces/task-repository-interface';

export interface TaskShowUserCaseInterface {
  execute(id: number): Promise<Task>;
}

export class TaskShowUserCase implements TaskShowUserCaseInterface {
  private readonly taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(id: number): Promise<Task> {
    const response = await this.taskRepository.show(id);
    const data = response.data;

    return new Task(
      Object.assign({}, data, {
        tags: data.tags?.map((tag: string) => new Tag(tag)),
        dueDate: new Date(data.dueDate.date ?? ''),
        createdAt: new Date(data.createdAt ?? ''),
        updatedAt: new Date(data.updatedAt ?? ''),
      }),
    );
  }
}
