// src/components/Profile.jsx
import { Link, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div>
        <nav>
          <Link to="details">Details</Link> |<Link to="settings">Settings</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
