import React from 'react';

import { useStore } from 'store';

import { Container } from './styles';

const Details: React.FC = () => {
  const { state } = useStore();

  return (
    <Container>
      <h3 className="program">Big Brother Brasil</h3>
      <h2 className="title">{state.title}</h2>
    </Container>
  );
};

export default Details;
