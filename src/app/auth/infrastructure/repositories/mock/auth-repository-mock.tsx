import { User } from '@/domain/entities/user';

import { AuthRepositoryInterface } from '../../../domain/interfaces/auth-repository-interface';
import { Auth, Register, Token } from '../../../domain/entities/auth';

export class AuthRepositoryMock implements AuthRepositoryInterface {
  private readonly auths: Auth[] = [
    new User(11, 'Flavio Murata', 'flaviomurata@brownie.com', {
      street: 'Praça Mauá 1',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
    }),
  ];

  login(auth: Token): Promise<Auth> {
    throw new Error('Method not implemented.');
  }
  register(user: Register): Promise<Register> {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }

  //   async find(id: number): Promise<User> {
  //     const user = this.users.find((user) => user.id === id);

  //     if (!user) {
  //       throw new Error('User not found');
  //     }

  //     return user;
  //   }
}
