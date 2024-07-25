import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      type="default"
      style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
