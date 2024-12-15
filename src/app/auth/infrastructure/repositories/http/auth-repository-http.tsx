import axios from 'axios';

import { AuthRepositoryInterface } from '../../../domain/interfaces/auth-repository-interface';
import { Token, Auth, Register } from '../../../domain/entities/auth';

export class AuthRepositoryHttp implements AuthRepositoryInterface {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost';
  }

  /**
   *
   */
  async login(auth: Auth): Promise<Token> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/login`, auth);
      localStorage.setItem('authToken', response.data.token);
      return response.data as Token;
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Login failed. Please try again.');
    }
  }

  /**
   *
   */
  async register(
    email: string,
    password: string,
    fullName: string,
  ): Promise<Token> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/signup`, {
        email,
        password,
        fullName,
      });
      localStorage.setItem('authToken', response.data.token);

      return response.data as Token;
    } catch (error) {
      console.error('Error during registration:', error);
      throw new Error(error.response.data.message);
    }
  }

  /**
   *
   */
  logout(): void {
    try {
      localStorage.removeItem('authToken');
      console.log('User logged out.');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
}
