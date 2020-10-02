import React from 'react';

import { ReactComponent as Play } from 'assets/icons/play.svg';

import { Container } from './styles';

export interface CarrouselCardProps {
  title: string;
  image: string;
  focus?: boolean;
}

const CarrouselCard: React.FC<CarrouselCardProps> = ({
  focus,
  title,
  image,
}) => (
  <Container background={image} focus={focus}>
    <div className="info">
      <span className="category">Realities</span>
      <h4 className="title">{title}</h4>
    </div>
    <Play className="play-icon" />
  </Container>
);

export default CarrouselCard;
