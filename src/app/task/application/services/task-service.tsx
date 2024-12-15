import { Task } from '../../domain/entities/task';
import { TaskRepositoryHttp } from '../../infrastructure/repositories/http/task-repository-http';
import {
  TaskAllUserCase,
  TaskAllUserCaseInterface,
} from '../usecase/task-all-usecase';
import {
  TaskCreateData,
  TaskCreateUserCase,
  TaskCreateUserCaseInterface,
} from '../usecase/task-create-usecase';
import {
  TaskDeleteUserCase,
  TaskDeleteUserCaseInterface,
} from '../usecase/task-delete-usecase';
import {
  TaskShowUserCase,
  TaskShowUserCaseInterface,
} from '../usecase/task-show-usecase';
import {
  TaskUpdateUserCase,
  TaskUpdateUserCaseInterface,
} from '../usecase/task-update-usecase';

export class TaskService {
  private taskAllUserCase: TaskAllUserCaseInterface;
  private taskCreateUserCase: TaskCreateUserCaseInterface;
  private taskDeleteUserCase: TaskDeleteUserCaseInterface;
  private taskShowUserCase: TaskShowUserCaseInterface;
  private taskUpdateUserCase: TaskUpdateUserCaseInterface;

  constructor() {
    this.taskAllUserCase = new TaskAllUserCase(new TaskRepositoryHttp());
    this.taskCreateUserCase = new TaskCreateUserCase(new TaskRepositoryHttp());
    this.taskDeleteUserCase = new TaskDeleteUserCase(new TaskRepositoryHttp());
    this.taskShowUserCase = new TaskShowUserCase(new TaskRepositoryHttp());
    this.taskUpdateUserCase = new TaskUpdateUserCase(new TaskRepositoryHttp());
  }

  async all() {
    return await this.taskAllUserCase.execute();
  }

  async create(task: Task) {
    return await this.taskCreateUserCase.execute(task);
  }

  async delete(task: Task) {
    return await this.taskDeleteUserCase.execute(task);
  }

  async show(id: number) {
    return await this.taskShowUserCase.execute(id);
  }

  async update(task: Task) {
    return await this.taskUpdateUserCase.execute(task);
  }
}

export const taskService = new TaskService();
