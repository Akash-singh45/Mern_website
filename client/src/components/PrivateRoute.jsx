import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser, loading } = useSelector((state) => state.user);

  // While checking auth state, you may optionally show a loading state
  if (loading) {
    return <p className='text-center mt-10'>Checking authentication...</p>;
  }

  // Redirect if no user
  if (!currentUser) {
    return <Navigate to='/sign-in' />;
  }

  // If authenticated, render nested route
  return <Outlet />;
}
