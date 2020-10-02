import React, { useState, useEffect } from 'react';

import { useStore } from 'store';

import { Container } from './styles';

const Background: React.FC = () => {
  const { state } = useStore();
  const [isFading, setIsFading] = useState(false);
  const [background, setBackground] = useState(state.background);

  useEffect(() => {
    function changeBackground(): void {
      setIsFading(true);

      setTimeout(() => {
        setBackground(state.background);
        setIsFading(false);
      }, 500);
    }

    changeBackground();
  }, [state.background]);

  return (
    <Container>
      <img
        src={background}
        className={isFading ? 'fade-out' : 'fade-in'}
        alt="/"
      />
      <div className="shadow" />
    </Container>
  );
};

export default Background;
