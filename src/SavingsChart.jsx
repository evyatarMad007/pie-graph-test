import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const formatNumberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const SavingsChart = ({ data, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const countData = data.reduce((acc, item) => acc + item.data, 0);

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
        display: false, // Hide default legend
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
        const { index } = elements[0];
        setHoveredIndex(index);
      } else {
        setHoveredIndex(null);
      }
    },
    maintainAspectRatio: false,
    animation: {
      duration: 700,
    },
  };

  const CustomLegend = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      {data.map((item, index) => (
        <div 
          key={index} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '5px',
            fontWeight: hoveredIndex === index ? 'bold' : 'normal',
            transition: 'font-weight 0.3s ease'
          }}
        >
          <div 
            style={{ 
              width: '7px', 
              height: '12px', 
              backgroundColor: item.backgroundColor, 
              marginRight: '5px' 
            }} 
          />
          <span style={{ 
            fontSize: '16px', 
            fontFamily: 'calibri', 
            color: "#003C7F"
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        background: "white",
        boxSizing: "border-box",
        position: "relative",
        width: "300px",
        height: "370px", // Increased height to accommodate custom legend
        overflow: "hidden",
        padding: "0 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: '2.5px',
          right: 0,
          width: "173px",
          height: "173px",
          borderRadius: "50%",
          margin: "auto",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0,
          background: 'transparent',
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <span style={{fontWeight: 500, fontSize: '16px', lineHeight: '28.2px', fontFamily: 'calibri', color:"#003C7F"}}>
          {title}
        </span>
        <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '28.2px', fontFamily: 'calibri', color: "#003C7F"}}>₪{formatNumberWithCommas(countData)}</span>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "75%",
          border: '0.5px solid black'
        }}
      >
        <Doughnut data={pieData} options={options}/>
      </div>
      <CustomLegend />
    </div>
  );
};

export default SavingsChart;