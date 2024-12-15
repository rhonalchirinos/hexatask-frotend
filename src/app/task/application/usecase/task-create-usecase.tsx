import { Customer } from '../../../auth/domain/entities/customer';
import { Tag } from '../../domain/entities/tag';
import { Task } from '../../domain/entities/task';
import { TaskRepositoryInterface } from '../../domain/interfaces/task-repository-interface';

export type TaskCreateData = {
  front: string;
  title: string;
  dueDates: Date;
  description: string;
  tags: Tag[];
  customer: Customer;
};

export interface TaskCreateUserCaseInterface {
  execute(data: Task): Promise<Task>;
}

export class TaskCreateUserCase implements TaskCreateUserCaseInterface {
  private readonly taskRepository: TaskRepositoryInterface;

  constructor(taskRepository: TaskRepositoryInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(data: Task) {
    if (!data) {
      throw new Error('Data is undefined');
    }

    const task = new Task({
      front: data.front,
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      status: data.status,
      tags: data.tags,
      customer: data.customer,
    });

    return this.taskRepository.create(task);
  }
}
