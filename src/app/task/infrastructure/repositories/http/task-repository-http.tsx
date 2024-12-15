import axios from 'axios';

import { TaskRepositoryInterface } from '../../../domain/interfaces/task-repository-interface';
import { Task } from '../../../domain/entities/task';
import { AuthToken } from '../../../../Helper';

export class TaskRepositoryHttp
  extends AuthToken
  implements TaskRepositoryInterface
{
  constructor() {
    super();
  }

  async all(): Promise<unknown[]> {
    const headers = this.header();
    const response = await axios.get(`${this.baseUrl}/tasks`, headers);
    return response.data;
  }

  async create(task: Task): Promise<Task> {
    const headers = this.header();
    const payload = {
      front: task.front,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
      tags: task.tags ? task.tags.map((d) => d.tag) : [],
    };
    const response = await axios.post(
      `${this.baseUrl}/tasks`,
      payload,
      headers,
    );
    return response.data;
  }

  async update(task: Task): Promise<Task> {
    const headers = this.header();
    const payload = {
      front: task.front,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
      tags: task.tags ? task.tags.map((d) => d.tag) : [],
    };
    const response = await axios.put(
      `${this.baseUrl}/tasks/${task.id}`,
      payload,
      headers,
    );
    return response.data;
  }

  async delete(task: Task): Promise<Task> {
    const headers = this.header();
    const response = await axios.delete(
      `${this.baseUrl}/tasks/${task.id}`,
      headers,
    );
    return response.data;
  }

  async show(id: number): Promise<Task> {
    const headers = this.header();
    const response = await axios.get(`${this.baseUrl}/tasks/${id}`, headers);
    return response.data;
  }
}
