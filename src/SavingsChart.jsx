import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SavingsChart = ({ data }) => {
  const pieData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.data),
        backgroundColor: data.map((item) => item.backgroundColor),
        hoverBackgroundColor: data.map((item) => item.hoverBackgroundColor),
        borderWidth: 3,
        borderColor: "white",
        hoverBorderColor: "white",
        // hoverBorderWidth: 0, // need to custom here
        borderRadius: 6, // need to custom here
        
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            family: "calibri",
          },
          padding: 20,
          boxWidth: 20,
          color: "#0f224b",
        },
      },
      tooltip: {
        backgroundColor: "#30e633", // Tooltip background color
        titleColor: "#000000", // Tooltip title color
        bodyColor: "#000000", // Tooltip body color
        borderColor: "#0f224b", // Tooltip border color
        borderWidth: 1, // Tooltip border width
        titleFont: {
          family: "calibri",
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          family: "calibri",
          size: 14,
        },
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": ₪" + tooltipItem.raw.toLocaleString();
          },
        },
        padding: 10,
      },
    },
    responsive: true,
    cutout: "70%", // To create the donut hole
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        background: "white",
        boxSizing: "border-box",
        width: "300px",
        height: "310px",
        padding: "0 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "95%",
          border: '0.5px solid black'
        }}
      >
        <Doughnut data={pieData} options={options} />
      </div>
    </div>
  );
};

export default SavingsChart;
