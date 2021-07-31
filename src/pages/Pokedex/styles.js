import styled from 'styled-components';

const types = {
  normal: 'background-color: #bfbfbf',
  fighting: 'background-color: #d87c58',
  flying: 'background-color: #999ade',
  poison: 'background-color: #925192',
  ground: 'background-color: #dea761',
  rock: 'background-color: #897864',
  bug: 'background-color: #b1c967',
  ghost: 'background-color: #c195dc',
  steel: 'background-color: #49769c',
  fire: 'background-color: #cf1414',
  water: 'background-color: #1689de',
  grass: 'background-color: #47a047',
  electric: 'background-color: #e6b700',
  psychic: 'background-color: #fa43b8',
  ice: 'background-color: #98c3de',
  dragon: 'background-color: #89315d',
  dark: 'background-color: #282433',
  fairy: 'background-color: #dca0ce',
  unknown: 'background-color: #545454',
  shadow: 'background-color: #364163',
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgcolor};
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
  color: ${(props) => props.theme.white};
  ${(props) => types[props.type || 'normal']}
`;
