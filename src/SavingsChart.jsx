import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const formatNumberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const SavingsChart = ({ data, title }) => {
  const DonutHeight = 390;
  const DonutWidth = 300;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexForTooltip, setHoveredIndexForTooltip] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, xInner: 0, y: 0, yInner: 0 });
  const chartRef = useRef(null);

  const countData = useMemo(() => data.reduce((acc, item) => acc + item.data, 0), [data]);

  const pieData = useMemo(() => ({
    labels: data.map((item) => item.label),
    datasets: [{
      data: data.map((item) => item.data),
      backgroundColor: data.map((item) => item.backgroundColor),
      hoverBackgroundColor: data.map((item) => item.hoverBackgroundColor),
      borderColor: "white",
      hoverBorderColor: "white",
      borderRadius: 7,
      borderWidth: 4,
      hoverBorderWidth: 0,
      hoverOffset: 18.5,
      offset: data.map(() => 0),
    }]
  }), [data]);

  const updatePieDataOffset = useCallback(() => {
    return {
      ...pieData,
      datasets: [{
        ...pieData.datasets[0],
        offset: data.map((_, index) => hoveredIndex === index ? 18.5 : 0),
        borderWidth: data.map((_, index) => hoveredIndex === index ? 0 : 4),
      }]
    };
  }, [pieData, data, hoveredIndex]);

  const [currentPieData, setCurrentPieData] = useState(pieData);

  useEffect(() => {
    setCurrentPieData(updatePieDataOffset());
  }, [hoveredIndex, updatePieDataOffset]);

  const options = useMemo(() => ({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    padding: 0,
    responsive: true,
    cutout: "78%",
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    onHover: (event, elements, chart) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        setHoveredIndex(index);
        setHoveredIndexForTooltip(index);
        const canvasPosition = chart.canvas.getBoundingClientRect();
        setTooltipPos({
          x: canvasPosition.left + event.x,
          y: canvasPosition.top + event.y,
          xInner: event.x,
          yInner: event.y,
        });
      } else {
        setHoveredIndex(null);
        setHoveredIndexForTooltip(null);
      }
    },
  }), []);

  const handleLegendHover = useCallback((index) => {
    setHoveredIndex(index);
    setHoveredIndexForTooltip(index);
    
    if (chartRef.current) {
      const chart = chartRef.current;
      const canvas = chart.canvas;
      const rect = canvas.getBoundingClientRect();
      const datasetMeta = chart.getDatasetMeta(0);
      const arc = datasetMeta.data[index];
      const centerPoint = arc.getCenterPoint();
      
      setTooltipPos({
        x: rect.left + centerPoint.x,
        y: rect.top + centerPoint.y,
        xInner: centerPoint.x,
        yInner: centerPoint.y,
      });
    }
  }, []);

  const handleLegendLeave = useCallback(() => {
    setHoveredIndex(null);
    setHoveredIndexForTooltip(null);
  }, []);

  const CustomLegend = useCallback(() => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        gap: "12px",
        marginTop: "20px",
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            gap: "7px",
            marginBottom: "5px",
            fontWeight: hoveredIndex === index ? "bolder" : "normal",
            transition: "font-weight 1s ease",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLegendHover(index)}
          onMouseLeave={handleLegendLeave}
        >
          <div
            style={{
              width: "4.5px",
              borderRadius: hoveredIndex === index ? "1.3px" : "5px",
              height: "13px",
              transform: hoveredIndex === index ? "scale(1,1.7)" : "scale(1,1)",
              backgroundColor: item.backgroundColor,
              marginRight: "5px",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "mfw_protocolharel, Arial, Helvetica, sans-serif",
              color: "#003C7F",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  ), [data, hoveredIndex, handleLegendHover, handleLegendLeave]);

  const CustomTooltip = useCallback(() => {
    if (hoveredIndexForTooltip === null) return null;
    const item = data[hoveredIndexForTooltip];

    const chartCenter = { x: DonutWidth / 2, y: DonutHeight / 2 };
    const isLeft = tooltipPos.xInner < chartCenter.x;
    const isTop = tooltipPos.yInner < chartCenter.y;
    const borderRadius = "10px";
    const sharpCorner = "0px";
  
    const translatePosition = () => {
      const positions = {
        yWhenTop: -60,
        yWhenBottom: 15,
        xWhenLeft: -105,
        xWhenRight: 15,
      };
  
      return {
        x: isLeft ? positions.xWhenLeft : positions.xWhenRight,
        y: isTop ? positions.yWhenTop : positions.yWhenBottom,
      };
    };
  
    const getBorderRadius = () => {
      const positions = {
        topLeft: `0 ${borderRadius} ${borderRadius} ${borderRadius}`,
        topRight: `${borderRadius} 0 ${borderRadius} ${borderRadius}`,
        bottomLeft: `${borderRadius} ${borderRadius} ${borderRadius} 0`,
        bottomRight: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
      };
  
      if( isLeft && isTop ) return positions.bottomRight;
      if( !isLeft && isTop ) return positions.bottomLeft;
      if( isLeft && !isTop ) return positions.topRight;
      if( !isLeft && !isTop ) return positions.topLeft;
    };
  
    const horizontalPosition = translatePosition().x;
    const verticalPosition = translatePosition().y;
  
    const tooltipStyle = {
      position: "fixed",
      left: `${tooltipPos.x}px`,
      top: `${tooltipPos.y}px`,
      transform: `translate(${horizontalPosition}px, ${verticalPosition}px)`,
      backgroundColor: item.tooltipColor,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.266), 1px 0 4px rgba(0, 0, 0, 0.085)",
      zIndex: 1000,
      borderRadius: getBorderRadius(),
      border: "3px solid white",
      textAlign: "center",
      width: "max-content",
      minWidth: "75px",
      height: "43px",
      maxHeight: "43px",
      padding: "7px 10px 2px 10px",
    };
  
    return (
      <div style={tooltipStyle}>
        <div
          style={{
            fontFamily: "mfw_protocolharel, Arial, Helvetica, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#003c7f",
            marginBottom: "4px",
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: "mfw_protocolharel, Arial, Helvetica, sans-serif",
            fontSize: "14px",
            fontWeight: "bolder",
            color: "#003c7f",
          }}
        >
          ₪{formatNumberWithCommas(item.data)}
        </div>
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: getBorderRadius(),
          border: "0.1px solid rgba(0, 0, 0, 0.035)",
          backgroundColor: 'transparent',
          boxSizing: "border-box",
        }}></div>
      </div>
    );

  }, [data, hoveredIndexForTooltip, tooltipPos, DonutWidth, DonutHeight]);

  return (
    <div
      style={{
        background: "white",
        boxSizing: "border-box",
        position: "relative",
        width: `${DonutWidth}px`,
        height: `${DonutHeight}px`,
        padding: "0",
      }}
    >
      {title && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "2.5px",
            right: 0,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0,
            background: "transparent",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "28.2px",
              fontFamily: "calibri",
              color: "#003C7F",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "28.2px",
              fontFamily: "calibri",
              color: "#003C7F",
            }}
          >
            ₪{formatNumberWithCommas(countData)}
          </span>
        </div>
      )}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Doughnut data={currentPieData} options={options} ref={chartRef} />
      </div>
      <CustomLegend/>
      <CustomTooltip />
    </div>
  );
};

export default SavingsChart;