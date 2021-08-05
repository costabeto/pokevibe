import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
`;

export const GoBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: none;
  background-color: transparent;

  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary};
`;
export const PokeId = styled.div`
  font-size: 1.2rem;
`;

export const Name = styled.div``;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Types = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 8px 0px;
`;

export const Type = styled.div`
  background-color: ${(props) => props.theme.types[props.type]};
  border-radius: 20px;
  padding: 8px;
  color: ${(props) => props.theme.white};

  & + & {
    margin-left: 8px;
  }
`;
