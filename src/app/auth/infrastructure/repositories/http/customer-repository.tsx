import axios from 'axios';

import { CustomerRepositoryInterface } from '../../../domain/interfaces/customer-repository-interface';
import { Customer } from '../../../domain/entities/customer';

export class CustomerRepositoryHttp implements CustomerRepositoryInterface {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost';
  }

  /**
   *
   */
  async me(): Promise<Customer> {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${this.baseUrl}/api/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    return response.data as Customer;
  }
}
