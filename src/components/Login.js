import React from 'react';

const Login = ({ setAuth, history }) => {
  const handleLogin = () => {
    setAuth(true);
    history.push('/code-playground');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
