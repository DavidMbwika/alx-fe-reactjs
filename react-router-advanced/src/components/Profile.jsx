// pages/Profile.jsx
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from '../components/ProfileDetails';
import ProfileSettings from '../components/ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
