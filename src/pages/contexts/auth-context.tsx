import { createContext } from 'react';
import { Auth, Token } from '../../app/auth/domain/entities/auth';
import { Customer } from '../../app/auth/domain/entities/customer';

type AuthContextType = {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;

  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;

  customer: Customer;
  setCustomer: React.Dispatch<React.SetStateAction<Customer | false | null>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
