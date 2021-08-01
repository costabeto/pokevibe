import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PokemonList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Pokemon = styled.div`
  width: 300px;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 5px;

  margin: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Name = styled.div`
  background: rgb(129, 129, 129);
  background: linear-gradient(
    144deg,
    rgba(129, 129, 129, 1) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(129, 129, 129, 1) 50%,
    rgba(255, 255, 255, 1) 75%,
    rgba(129, 129, 129, 1) 100%
  );
  color: black;
  border: 1px solid black;
  padding: 5px;
  margin: 0px;
  text-transform: capitalize;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Type = styled.div`
  width: fit-content;
  text-transform: uppercase;

  margin: 8px 0px;

  padding: 4px 10px;
  border-radius: 5%;
  color: ${(props) => props.theme.primary};
  ${(props) => {
    return props.theme.types[props.type || 'normal'];
  }}
`;
