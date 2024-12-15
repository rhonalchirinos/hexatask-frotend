import { Customer } from '../../domain/entities/customer';
import { CustomerRepositoryInterface } from '../../domain/interfaces/customer-repository-interface';

export interface MeUserCaseInterface {
  execute(): Promise<Customer>;
}

export class MeUserCase implements MeUserCaseInterface {
  private readonly customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute() {
    return this.customerRepository.me();
  }
}
