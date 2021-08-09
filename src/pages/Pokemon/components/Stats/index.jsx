import React, { useMemo } from 'react';
import { Container, BarComponent } from './styles';
import { useTheme } from 'styled-components';

const Stats = ({ data }) => {
  const theme = useTheme();
  const chartData = useMemo(() => {
    const labels = data.map((s) => s.name);
    const values = data.map((s) => s.value);

    return {
      labels,
      datasets: [
        {
          axis: 'y',
          label: 'points ',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          color: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [data]);

  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    responsive: true,

    labels: {
      fontColor: '#fff',
      color: '#fff',
    },
    plugins: {
      legend: {
        display: false,
        fullWidth: false,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Stats',
        color: theme.secondary,
        font: {
          wheight: 'bold',
          size: '16px',
          family: 'retroGamer',
        },
      },
    },
  };
  return (
    <Container>
      <BarComponent data={chartData} options={options} />
    </Container>
  );
};

export default Stats;
