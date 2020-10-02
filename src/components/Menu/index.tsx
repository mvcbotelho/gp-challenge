import React, { useState } from 'react';

import useKeys from 'navigation/useKeys';

import MenuItem from '../MenuItem';

import { menuItems } from './items';
import { Container } from './styles';

const Menu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const pressUp = (): void => {
    if (selectedItem > 0) setSelectedItem(selectedItem - 1);
  };
  const pressDown = (): void => {
    if (selectedItem < menuItems.length - 1) setSelectedItem(selectedItem + 1);
  };

  const { focused, setContext } = useKeys('menu', {
    up: pressUp,
    down: pressDown,
    right: () => setContext('home'),
  });

  return (
    <Container focus={focused}>
      <nav>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            name={item.name}
            focus={focused && selectedItem === index}
            hideText={!focused}
            highlight={item.id === 'home'}
          />
        ))}
      </nav>
    </Container>
  );
};

export default Menu;
