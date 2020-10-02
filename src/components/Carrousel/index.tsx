import React, { useState, useEffect } from 'react';

import useKeys from 'navigation/useKeys';
import { useStore } from 'store';
import { setCarrouselItem, CarrouselItem } from 'store/actions';

import CarrouselCard from 'components/CarrouselCard';

import { Container } from './styles';

interface CarrouselProps {
  id: number;
  data: CarrouselItem[];
  up?: () => void;
  down?: () => void;
}

const Carrousel: React.FC<CarrouselProps> = ({ id, data, up, down }) => {
  const [cursor, setCursor] = useState(0);
  const { dispatch } = useStore();
  const { focused, setContext } = useKeys(`carrousel-${id}`, {
    up,
    down,
    left: () => {
      if (cursor === 0) setContext('menu');
      else setCursor(cursor - 1);
    },
    right: () => cursor < data.length - 1 && setCursor(cursor + 1),
  });

  useEffect(() => {
    if (focused) {
      dispatch(setCarrouselItem(data[cursor]));
    }
  }, [focused, dispatch, data, cursor]);

  return (
    <Container focus={focused} cursor={cursor}>
      <div className="rails">
        {data.map(({ title, image }, index) => (
          <CarrouselCard
            key={`card-${title}`}
            title={title}
            image={image}
            focus={focused && cursor === index}
          />
        ))}
      </div>
      <div className="frame" />
    </Container>
  );
};

export default Carrousel;
