import React, { useState, useEffect } from 'react';

import useKeys from 'navigation/useKeys';
import { useStore } from 'store';
import { setBackground } from 'store/actions';

import Button from 'components/Button';
import Logo from 'assets/images/bbb19-logo.png';
import Tiago from 'assets/images/bbb19-tiago-leifert.jpg';

import { Container } from './styles';

const Highlight: React.FC = () => {
  const [cursor, setCursor] = useState(0);
  const { dispatch } = useStore();
  const { focused, setContext } = useKeys('highlight', {
    left: () => {
      if (cursor === 0) setContext('menu');
      else setCursor(cursor - 1);
    },
    right: () => cursor < 1 && setCursor(cursor + 1),
    down: () => setContext('categories'),
  });

  useEffect(() => {
    if (focused) dispatch(setBackground(Tiago));
  }, [focused, dispatch, cursor]);

  return (
    <Container>
      <h1>
        <img className="logo" src={Logo} alt="logo do BBB19" />
      </h1>
      <h2 className="description">
        Acompanhe 24h ao vivo a casa mais
        <br />
        vigiada do Brasil
      </h2>
      <div className="buttons-wrapper">
        <Button focus={focused && cursor === 0}>► Assista</Button>
        <Button focus={focused && cursor === 1}>Veja mais</Button>
      </div>
    </Container>
  );
};

export default Highlight;
