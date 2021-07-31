import { createGlobalStyle } from 'styled-components';
import retroGame from './assets/fonts/retroGame.ttf';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
  font-family: retroGamer;
  src: url(${retroGame});
}

  *{
    box-sizing: border-box;
    font-family:'retroGamer';
  }

  
  body,html {
    margin: 0px;
    padding: 0px;
    width: 100vw;
    background-color: ${(props) =>
      (props.theme && props.theme.bgcolor) || 'gray'};    
  }

`;
