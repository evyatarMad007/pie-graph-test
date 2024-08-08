import React from 'react'
import SavingsChart from './SavingsChart.jsx'

function App() {
  const chartPieData = [
    {
      label: 'קרן פנסיה',
      data: 501365,
      backgroundColor: 'green',
      // backgroundColor: '#32CD32',
      hoverBackgroundColor: '#3CB371',
      tooltipColor: '#a1f5a2',
    },
    {
      label: 'קופת גמל',
      data: 400000,
      backgroundColor: '#00008B',
      hoverBackgroundColor: '#0000CD',
      tooltipColor: '#9999ff',
    },
    {
      label: 'גמל להשקעה',
      data: 300000,
      backgroundColor: '#4682B4',
      hoverBackgroundColor: '#6495ED',
      tooltipColor: '#b3d1e0',
    },
    {
      label: 'קרן השתלמות',
      data: 200000,
      backgroundColor: '#87CEEB',
      hoverBackgroundColor: '#87CEFA',
      tooltipColor: '#c7e2f7',
    },
    {
      label: 'ביטוח מנהלים',
      data: 256470,
      backgroundColor: '#FFD700',
      hoverBackgroundColor: '#FFD700',
      tooltipColor: '#ffff99',
    },
  ]

  return (
      <div>
        <SavingsChart data={chartPieData}/>
      </div>
  )
}

export default App
