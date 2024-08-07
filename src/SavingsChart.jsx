import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SavingsChart = () => {
  const data = {
    labels: ['קרן פנסיה', 'קופת גמל', 'גמל להשקעה', 'קרן השתלמות', 'ביטוח מנהלים'], 
    datasets: [
      {
        data: [501365, 400000, 300000, 200000, 256470], // Example data
        backgroundColor: ['#32CD32', '#00008B', '#4682B4', '#87CEEB', '#FFD700'],
        hoverBackgroundColor: ['#32CD32', '#00008B', '#4682B4', '#87CEEB', '#FFD700'],
      },
    ],
  };

  
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: 'calibri',
          },
          padding: 10,
          boxWidth: 20,
          color: '#0f224b',
        },
      },
      tooltip: {
        backgroundColor: '#ffffff', // Tooltip background color
        titleColor: '#000000', // Tooltip title color
        bodyColor: '#000000', // Tooltip body color
        borderColor: '#0f224b', // Tooltip border color
        borderWidth: 1, // Tooltip border width
        titleFont: {
          family: 'calibri',
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          family: 'calibri',
          size: 14,
        },
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ₪' + tooltipItem.raw.toLocaleString();
          },
        },
        padding: 10,
      },
    },
    responsive: true,
    cutout: '70%', // To create the donut hole
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', width: '50%', height: '50%' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SavingsChart;
