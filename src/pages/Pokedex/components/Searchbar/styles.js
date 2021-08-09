import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 95%;
  max-width: 300px;

  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${(props) => darken(0.2, props.theme.primary)};
  color: ${(props) => props.theme.secondary};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Input = styled.input`
  max-width: 60%;
  border: none;
  /* border-radius: 20px 20px 0px 0px; */
  border-radius: 20px;

  background-color: ${(props) => darken(0.2, props.theme.primary)};
  color: ${(props) => props.theme.secondary};
  &:focus {
    outline: none;
  }
`;

export const ResultCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Results = styled.div`
  width: 100%;
`;

export const ResultItem = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  background: transparent;
  text-align: left;
  color: ${(props) => props.theme.secondary};

  & + & {
    border-top: 1px solid ${(props) => lighten(0.4, props.theme.secondary)};
  }

  &:hover {
    background-color: ${(props) => darken(0.5, props.theme.primary)};
    color: ${(props) => darken(0.2, props.theme.primary)};
  }

  &:last-child {
    border-radius: 0px 0px 20px 20px;
  }
`;
