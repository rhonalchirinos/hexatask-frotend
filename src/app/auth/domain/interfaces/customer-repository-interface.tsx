import { Customer } from '../entities/customer';

export interface CustomerRepositoryInterface {
  me(): Promise<Customer>;
}
