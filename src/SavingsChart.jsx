import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);




const SavingsChart = ({ data, children }) => {
  const [isHovered, setIsHovered] = useState(false);
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
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 16,
            family: "calibri",
            weight: 300,
          },
          padding: 15,
          boxWidth: 7,
          boxHeight: 12,
          color:"#003C7F",
        },
      },
      tooltip: {
        backgroundColor: (context) => {
          const selectedData = data.find((item) => item.label === context.tooltip.title[0]);
          return selectedData.tooltipColor;
        },
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#ffffff",
        borderWidth: 2.5,
        boxShadowColor: "10px 10px 10px red",
        borderRadius: 6,
        padding: 10,
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
            return `₪${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },

    },
    
    responsive: true,
    cutout: "75%",
    onHover: (event, elements) => {
      if (elements.length > 0) {
        setIsHovered(true);
        const { index } = elements[0];
        setActiveIndex(index);
      } else {
        setIsHovered(false);
        setActiveIndex(null);
      }
    },
    maintainAspectRatio: false,
    animation: {
      duration: 700, // Disable animation,
    },
    transitions: {
      hover: {
        animation: {
          duration: 0, // Disable animation when hovering
        },
      },

    },
  };

  return (
    <div
      style={{
        background: "white",
        boxSizing: "border-box",
        position: "relative",
        width: "300px",
        height: "320px",
        overflow: "hidden",
        padding: "0 0",
      }}
    >
     <div
        style={{
          position: "absolute",
          top: "32px",
          left: '1px',
          right: 0,
          width: "184px",
          height: "184px",
          borderRadius: "50%",
          margin: "auto",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0,
          background: 'transparent',
          userSelect: "none",
          pointerEvents: "none", // This makes sure that the text is not interfering with mouse events
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "95%",
          border: '0.5px solid black'
        }}
      >
        <Doughnut data={pieData} options={options}/>
      </div>
    </div>
  );
};

export default SavingsChart;
