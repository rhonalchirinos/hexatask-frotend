import { Outlet } from 'react-router-dom';
import Navbar from './NavbarTools';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LayoutTask() {
  return (
    <div className="container mx-auto bg-white">
      <header>
        <Navbar />
      </header>
      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <div className="container mx-auto mt-12 border-t border-gray-200 py-12 text-center text-xs uppercase">
        <div>Copyright &copy; 2021 foundation</div>
        <div className="mt-2 text-gray-400">Images by Unsplash</div>
      </div>

      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LayoutTask;
