import { useAuth } from '../pages/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { customer, fetchLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetchLogout();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="bg-white-800 z-50">
      <div className="mx-auto px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-700 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Logout
              </button>
              <h4 className="mr-4 text-2xl font-semibold text-black">
                Hola {customer.fullName} ({customer.email})
              </h4>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
