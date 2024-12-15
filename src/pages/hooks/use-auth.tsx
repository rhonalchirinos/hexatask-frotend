import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { authService } from '../../app/auth/application/services/auth-service';

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useUsers must be used within an UserProvider');
  }

  const { token, customer, setToken, setCustomer } = authContext;

  const fetchLogin = async (email: string, password: string) => {
    const token = await authService.login({ email, password });
    const customer = await authService.me();

    setToken(token);
    setCustomer(customer);
  };

  const fetchRegister = async (
    email: string,
    password: string,
    fullName: string,
  ) => {
    const token = await authService.register(email, password, fullName);
    const customer = await authService.me();

    setToken(token);
    setCustomer(customer);
  };

  const fetchMe = async () => {
    try {
      const customer = await authService.me();
      setCustomer(customer);
    } catch (error) {
      setCustomer(false);
      console.error(error);
    }
  };

  const fetchLogout = async () => {
    console.log('logout');
  };

  return { token, customer, fetchLogin, fetchLogout, fetchMe, fetchRegister };
};
