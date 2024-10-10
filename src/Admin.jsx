import React from 'react';

const Admin = ({ onLogout }) => {
  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Admin;
