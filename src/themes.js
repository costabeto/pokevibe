const types = {
  normal: '#bfbfbf',
  fighting: '#d87c58',
  flying: '#999ade',
  poison: '#925192',
  ground: '#dea761',
  rock: '#897864',
  bug: '#b1c967',
  ghost: '#c195dc',
  steel: '#49769c',
  fire: '#cf1414',
  water: '#1689de',
  grass: '#47a047',
  electric: '#e6b700',
  psychic: '#fa43b8',
  ice: '#98c3de',
  dragon: '#89315d',
  dark: '#282433',
  fairy: '#dca0ce',
  unknown: '#545454',
  shadow: '#364163',
};

const themes = {
  light: {
    primary: '#e6e6e6',
    secondary: '#2b2b2b',
    red: '#dc143c',
    white: '#e6e6e6',
    types,
  },
  dark: {
    primary: '#3f3f3f',
    secondary: '#e6e6e6',
    red: '#dc143c',
    white: '#e6e6e6',
    types,
  },
};

export default themes;
