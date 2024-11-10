// eslint-disable-next-line no-unused-vars
import React from 'react';
import UserInfo from './UserInfo'; // Import the UserInfo component

// eslint-disable-next-line react/prop-types
function ProfilePage({ userData }) {
  return (
    <div>
      <UserInfo userData={userData} /> {/* Pass userData as a prop to UserInfo */}
    </div>
  );
}

export default ProfilePage;