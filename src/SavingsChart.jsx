import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SavingsChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        hoverBorderWidth: 2,
        borderRadius: 6,
        offset: (context) => {
          if (context.dataIndex === activeIndex) {
            return 20; // Adjust this value to control how much the segment pops out
          }
          return 0;
        },
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
        backgroundColor: (context) => {
          const selectedData = data.find((item) => item.label === context.tooltip.title[0]);
          return selectedData.tooltipColor;
        },
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#0f224b",
        borderWidth: 1,
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
    cutout: "70%",
    maintainAspectRatio: false,
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        setActiveIndex(index === activeIndex ? null : index);
      }
    },
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
