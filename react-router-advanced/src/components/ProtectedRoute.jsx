/* eslint-disable react/prop-types */
// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
