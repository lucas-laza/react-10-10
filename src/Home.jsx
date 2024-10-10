import React from 'react';
import Container from './Component/Container';
import Category from './Category';

const Home = ({ onLogout }) => {
  return (
    <Container onLogout={onLogout}>
      <Category />
    </Container>
  );
};

export default Home;
