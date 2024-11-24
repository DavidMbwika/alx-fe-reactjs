/* eslint-disable react/prop-types */
// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ useAuth, children }) {
  return useAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
