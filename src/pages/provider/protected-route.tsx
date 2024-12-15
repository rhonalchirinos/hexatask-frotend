import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate } from 'react-router-dom';

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500"></div>
      <p className="mt-4 text-gray-700">Loading...</p>
    </div>
  );
};

const getToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { customer, fetchMe } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      if (!getToken()) {
        setIsLoading(false);
        return;
      }
      fetchMe().then(() => setIsLoading(false));
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : customer ? (
        children
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default ProtectedRoute;
