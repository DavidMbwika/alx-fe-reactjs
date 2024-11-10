/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

 
function UserDetails({ userData }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      // eslint-disable-next-line react/prop-types, react/prop-types
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;