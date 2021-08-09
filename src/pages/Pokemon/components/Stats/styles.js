import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme.secondary};
`;

export const BarComponent = styled(Bar)`
  color: ${(props) => props.theme.secondary};
  fill: ${(props) => props.theme.secondary};
`;
