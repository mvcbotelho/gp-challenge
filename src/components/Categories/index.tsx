import React, { useState, useEffect } from 'react';

import data from 'store/data';
import useKeys from 'navigation/useKeys';

import Carrousel from 'components/Carrousel';

import { Container } from './styles';

const Categories: React.FC = () => {
  const [cursor, setCursor] = useState(0);
  const { focused, setContext } = useKeys('categories', {});

  const carrouselUp = (): void => {
    if (cursor === 0) setContext('highlight');
    else setCursor(cursor - 1);
  };
  const carrouselDown = (): void => {
    if (cursor < data.length - 1) setCursor(cursor + 1);
  };

  useEffect(() => {
    setContext(`carrousel-${cursor}`);
  }, [cursor]);

  useEffect(() => {
    if (focused) setContext(`carrousel-${cursor}`);
  }, [focused, cursor]);

  return (
    <Container>
      <h3 className="carrousel-title">Agora no BBB</h3>
      {data.map((panels, index) => (
        <Carrousel
          key={panels.id}
          id={index}
          data={panels.data}
          up={carrouselUp}
          down={carrouselDown}
        />
      ))}
    </Container>
  );
};

export default Categories;
