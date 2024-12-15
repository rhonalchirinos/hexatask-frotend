import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-white font-sans font-normal antialiased">
      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <div className="container mx-auto mt-12 border-t border-gray-200 py-12 text-center text-xs uppercase">
        <div>Copyright &copy; 2021 foundation</div>
        <div className="mt-2 text-gray-400">Images by Unsplash</div>
      </div>
    </div>
  );
}

export default Layout;
