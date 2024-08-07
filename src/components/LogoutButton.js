import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      type="default"
      style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
