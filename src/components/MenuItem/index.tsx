import React from 'react';

import { Container } from './styles';

interface MenuItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  focus?: boolean;
  hideText?: boolean;
  highlight?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  name,
  focus,
  hideText,
  highlight,
}) => (
  <Container focus={focus} highlight={highlight} showText={!hideText}>
    <Icon />
    <span>{name}</span>
  </Container>
);
export default MenuItem;
