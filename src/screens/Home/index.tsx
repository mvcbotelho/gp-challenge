import React, { useState, useEffect } from 'react';

import { useKeyNavigator } from 'navigation/KeyNavigator';

import Background from 'components/Background';
import Highlight from 'components/Highlight';
import Details from 'components/Details';
import Categories from 'components/Categories';
import KeyBoard from 'components/KeyBoard';

import { Container, KeyBoardArea } from './styles';

const Home: React.FC = () => {
  const { context, setContext } = useKeyNavigator();
  const [lastSubContext, setLastSubContext] = useState('highlight');

  useEffect(() => {
    if (context === 'home') setContext(lastSubContext);
    if (context === 'keyboard') setLastSubContext('keyboard');
    if (context === 'highlight') setLastSubContext('highlight');
    if (context === 'categories') setLastSubContext('categories');
    // eslint-disable-next-line
  }, [context]);

  return (
    <Container>
      <KeyBoardArea>
        <KeyBoard />
      </KeyBoardArea>
      <Background />
      {lastSubContext === 'keyboard' && <KeyBoard />}
      {lastSubContext === 'highlight' && <Highlight />}
      {lastSubContext === 'categories' && <Details />}
      <Categories />
    </Container>
  );
};

export default Home;
