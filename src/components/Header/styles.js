import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;

  margin: 0px;
  padding: 16px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};

  box-shadow: 2px -4px 21px 14px rgba(0, 0, 0, 0.84);
  -webkit-box-shadow: 2px -4px 21px 14px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: 2px -4px 21px 14px rgba(0, 0, 0, 0.84);

  h1 {
    font-size: 1.3rem;
    margin: 0px;
    width: 100%;
    text-align: center;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;

  position: absolute;
  right: 20px;

  svg {
    color: white;
    font-size: 24px;
  }
`;

export const Menu = styled(animated.div)`
  transform: translateY(-1px);
  position: absolute;

  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px;
  padding: 0px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};
`;

export const MenuItem = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 16px 0px;

  text-decoration: none;
  color: white;

  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.red)};
  }
`;
