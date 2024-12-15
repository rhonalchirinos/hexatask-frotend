import { Customer } from '../../../auth/domain/entities/customer';
import { Tag } from './tag';

export class Task {
  id?: number;
  front?: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: string;
  tags?: Tag[];
  customer?: Customer;
  createdAt?: string;
  updatedAt?: string;

  constructor({
    id,
    front,
    title,
    description,
    dueDate,
    status,
    tags,
    customer,
    createdAt,
    updatedAt,
  }: {
    id?: number;
    front?: string;
    title?: string;
    description?: string;
    dueDate?: Date;
    status?: string;
    tags?: Tag[];
    customer?: Customer;
    createdAt?: string;
    updatedAt?: string;
  }) {
    this.id = id;
    this.front = front;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.tags = tags;
    this.customer = customer;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
