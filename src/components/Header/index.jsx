import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container, MenuButton, Menu, MenuItem } from './styles';
import { useSpring } from 'react-spring';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const fade = useSpring({
    opacity: menu ? 1 : 0,
  });

  return (
    <>
      <Container>
        <h1>PokéVibe</h1>
        <MenuButton onClick={() => setMenu(!menu)}>
          {menu ? <FiX /> : <FiMenu />}
        </MenuButton>
      </Container>
      <Menu style={fade}>
        <MenuItem to='/'>Home</MenuItem>
        <MenuItem to='/pokedex'>Pokédex</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
