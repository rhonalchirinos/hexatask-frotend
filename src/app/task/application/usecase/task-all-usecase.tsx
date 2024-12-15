import { Tag } from '../../domain/entities/tag';
import { Task } from '../../domain/entities/task';
import { TaskRepositoryInterface } from '../../domain/interfaces/task-repository-interface';

export interface TaskAllUserCaseInterface {
  execute(): Promise<Task[]>;
}

export class TaskAllUserCase implements TaskAllUserCaseInterface {
  private readonly taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute() {
    const items = await this.taskRepository.all();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return items.map((t: any) => {
      return new Task(
        Object.assign({}, t, {
          tags: t.tags?.map((tag: string) => new Tag(tag)),
          dueDate: new Date(t.dueDate.date ?? ''),
          createdAt: new Date(t.createdAt ?? ''),
          updatedAt: new Date(t.updatedAt ?? ''),
        }),
      );
    });
  }
}
