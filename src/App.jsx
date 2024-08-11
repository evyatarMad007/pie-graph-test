import React from 'react'
import SavingsChart from './SavingsChart.jsx'

function App() {
  const chartPieData = [
    {
      label: 'גמל להשקעה',
      data: 324658,
      backgroundColor: '#4682B4',
      hoverBackgroundColor: '#6495ED',
      tooltipColor: '#d0e7f1',
    },
    {
      label: 'קופת גמל',
      data: 102502,
      backgroundColor: '#00008B',
      hoverBackgroundColor: '#0000CD',
      tooltipColor: '#d2d2f2',
    },
    {
      label: 'קרן פנסיה',
      data: 318695,
      backgroundColor: '#32CD32',
      hoverBackgroundColor: '#3CB371',
      tooltipColor: '#d4f0d4',
    },
    {
      label: 'ביטוח מנהלים',
      data: 57456,
      backgroundColor: '#FFD700',
      hoverBackgroundColor: '#FFD700',
      tooltipColor: '#f1f1d0',
    },
    {
      label: 'קרן השתלמות',
      data: 178506,
      backgroundColor: '#87CEEB',
      hoverBackgroundColor: '#87CEFA',
      tooltipColor: '#d2e3ef',
    },
  ]

  return (
      <div>
        <SavingsChart data={chartPieData} title={"?כמה חסכתי עד היום"}/>
      </div>
  )
}

export default App
