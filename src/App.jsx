import React from 'react'
import SavingsChart from './SavingsChart.jsx'

function App() {
  const chartPieData = [
    {
      label: 'גמל להשקעה',
      data: 300000,
      backgroundColor: '#4682B4',
      hoverBackgroundColor: '#6495ED',
      tooltipColor: '#d0e7f1',
    },
    {
      label: 'קופת גמל',
      data: 400000,
      backgroundColor: '#00008B',
      hoverBackgroundColor: '#0000CD',
      tooltipColor: '#d2d2f2',
    },
    {
      label: 'קרן פנסיה',
      data: 501365,
      backgroundColor: '#32CD32',
      hoverBackgroundColor: '#3CB371',
      tooltipColor: '#d4f0d4',
    },
    {
      label: 'ביטוח מנהלים',
      data: 256470,
      backgroundColor: '#FFD700',
      hoverBackgroundColor: '#FFD700',
      tooltipColor: '#f1f1d0',
    },
    {
      label: 'קרן השתלמות',
      data: 200000,
      backgroundColor: '#87CEEB',
      hoverBackgroundColor: '#87CEFA',
      tooltipColor: '#d2e3ef',
    },
  ]

  return (
      <div>
        <SavingsChart data={chartPieData}>
        <span style={{fontWeight: 500, fontSize: '16px', lineHeight: '28.2px', fontFamily: 'calibri', color:"#003C7F"}}>
          ?כמה חסכתי עד היום
        </span>
        <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '28.2px', fontFamily: 'calibri', color: "#003C7F"}}>₪1,657,835</span>
        </SavingsChart>
      </div>
  )
}

export default App
