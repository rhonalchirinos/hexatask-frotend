import { Auth, Token } from '../../domain/entities/auth';
import { AuthRepositoryHttp } from '../../infrastructure/repositories/http/auth-repository-http';
import { CustomerRepositoryHttp } from '../../infrastructure/repositories/http/customer-repository';
import {
  LoginUserCase,
  LoginUserCaseInterface,
} from '../usecase/login-usercase';
import { MeUserCase, MeUserCaseInterface } from '../usecase/me-usecase';
import { RegisterUserCase } from '../usecase/register-usercase';

export class AuthService {
  /**
   * @var loginUserCase
   */
  private loginUserCase: LoginUserCaseInterface;
  private meUserCase: MeUserCaseInterface;
  private registerUserCase: RegisterUserCase;

  constructor() {
    this.loginUserCase = new LoginUserCase(new AuthRepositoryHttp());
    this.registerUserCase = new RegisterUserCase(new AuthRepositoryHttp());
    this.meUserCase = new MeUserCase(new CustomerRepositoryHttp());
  }

  async login(auth: Auth): Promise<Token> {
    return await this.loginUserCase.execute(auth);
  }

  async register(
    email: string,
    password: string,
    fullName: string,
  ): Promise<Token> {
    return await this.registerUserCase.execute(email, password, fullName);
  }

  async me() {
    return await this.meUserCase.execute();
  }
}

export const authService = new AuthService();
