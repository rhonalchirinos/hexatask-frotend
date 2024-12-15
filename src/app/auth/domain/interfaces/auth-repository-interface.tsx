import { Auth, Register, Token } from '../entities/auth';

export interface AuthRepositoryInterface {
  login(auth: Auth): Promise<Token>;
  register(email: string, password: string, fullName: string): Promise<Token>;
  logout(): void;
}
