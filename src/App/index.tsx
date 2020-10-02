import React from 'react';

import Background from 'components/Background';
import Menu from 'components/Menu';
import Home from 'screens/Home';

import { Container, Content } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <Background />
      <Menu />
      <Content>
        <Home />
      </Content>
    </Container>
  );
};

export default App;
