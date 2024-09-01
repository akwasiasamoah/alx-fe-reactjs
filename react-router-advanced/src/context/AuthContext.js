// src/components/ProtectedRoute.jsx

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the hook

  return isAuthenticated ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Add prop type validation for children
};

export default ProtectedRoute;
