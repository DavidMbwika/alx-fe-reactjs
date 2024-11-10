// eslint-disable-next-line no-unused-vars
import React from 'react';
import UserDetails from './UserDetails'; // Import the UserDetails component

// eslint-disable-next-line react/prop-types
function UserInfo({ userData }) {
  return (
    <div>
      <UserDetails userData={userData} /> {/* Pass userData as a prop to UserDetails */}
    </div>
  );
}

export default UserInfo;