import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from 'antd';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Picture:</p>
          <img src={user.picture} alt={user.name} style={{ width: '150px' }} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
