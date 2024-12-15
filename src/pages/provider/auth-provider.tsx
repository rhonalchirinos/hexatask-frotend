import { ReactNode, useState } from 'react';
import { Auth, Token } from '../../app/auth/domain/entities/auth';
import { AuthContext } from '../contexts/auth-context';
import { Customer } from '../../app/auth/domain/entities/customer';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, token, setToken, customer, setCustomer }}
    >
      {children}
    </AuthContext.Provider>
  );
};
