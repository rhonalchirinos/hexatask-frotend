import { Auth, Token } from '../../domain/entities/auth';
import { AuthRepositoryInterface } from '../../domain/interfaces/auth-repository-interface';

export interface LoginUserCaseInterface {
  execute(auth: Auth): Promise<Token>;
}

export class LoginUserCase implements LoginUserCaseInterface {
  private readonly authRepository: AuthRepositoryInterface;

  constructor(authRepository: AuthRepositoryInterface) {
    this.authRepository = authRepository;
  }

  async execute(auth: Auth) {
    return this.authRepository.login(auth);
  }
}
