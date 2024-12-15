import { useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { customer, token, fetchLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: 'vegeta2@gmail.com',
    password: 'hala1234',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido');
      return;
    }

    setError('');
    setLoading(true);
    setSuccess('');

    try {
      await fetchLogin(email, password);
      navigate('/tasks');
    } catch (err) {
      console.error('Error', err);
      setError('Ocurrió un error. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border-black p-6 shadow-md">
        <h2 className="center mb-6 text-2xl font-semibold text-black">Login</h2>
        {error && <div className="mb-4 text-center text-red-500">{error}</div>}
        {success && (
          <div className="mb-4 text-center text-green-500">{success}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`w-full rounded-md bg-black px-4 py-2 text-white focus:outline-none focus:ring-2 ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
