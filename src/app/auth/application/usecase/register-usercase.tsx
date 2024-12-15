import { Token } from '../../domain/entities/auth';
import { AuthRepositoryInterface } from '../../domain/interfaces/auth-repository-interface';

export interface RegisterUserCaseInterface {
  execute(email: string, password: string, fullName: string): Promise<Token>;
}

export class RegisterUserCase implements RegisterUserCaseInterface {
  private readonly authRepository: AuthRepositoryInterface;

  constructor(authRepository: AuthRepositoryInterface) {
    this.authRepository = authRepository;
  }

  async execute(
    email: string,
    password: string,
    fullName: string,
  ): Promise<Token> {
    return this.authRepository.register(email, password, fullName);
  }
}
