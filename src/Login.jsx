import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(isAdminLogin);
    navigate('/home');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Admin Login
        <input 
          type="checkbox" 
          checked={isAdminLogin} 
          onChange={() => setIsAdminLogin(!isAdminLogin)} 
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
