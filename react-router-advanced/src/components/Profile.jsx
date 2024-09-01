// src/components/Profile.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div>
        <nav>
          <Link to="details">Details</Link> |<Link to="settings">Settings</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
