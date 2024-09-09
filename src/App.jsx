import React from 'react'
import SavingsChart from './SavingsChart.jsx'

function App() {
  const chartPieData = [
    {
      label: 'קרן פנסיה',
      data: 318695,
      backgroundColor: '#33b242',
      hoverBackgroundColor: '#33b242',
      tooltipColor: '#d7f4db',
    },
    {
      label: 'קופת גמל',
      data: 102502,
      backgroundColor: '#003c7f',
      hoverBackgroundColor: '#003c7f',
      tooltipColor: '#c7e1ff',
    },
    {
      label: 'גמל להשקעה',
      data: 324658,
      backgroundColor: '#2d76cb',
      hoverBackgroundColor: '#2d76cb',
      tooltipColor: '#e2ecf9',
    },
    {
      label: 'קרן השתלמות',
      data: 178506,
      backgroundColor: '#c7e1ff',
      hoverBackgroundColor: '#c7e1ff',
      tooltipColor: '#e2ecf9',
    },
    {
      label: 'ביטוח מנהלים',
      data: 57456,
      backgroundColor: '#f9ba20',
      hoverBackgroundColor: '#f9ba20',
      tooltipColor: '#fef0cd',
    },
    {
      label: 'חסכון פיננסי',
      data: 89456,
      backgroundColor: '#7e20f9',
      hoverBackgroundColor: '#7e20f9',
      tooltipColor: '#bfa1e7',
    },
    {
      label: 'ביטוח נסיעות לחו"ל',
      data: 117589,
      backgroundColor: '#787878',
      hoverBackgroundColor: '#787878',
      tooltipColor: '#dadada',
    },
    {
      label: 'ביטוח בריאות',
      data: 210548,
      backgroundColor: '#c8ff00',
      hoverBackgroundColor: '#c8ff00',
      tooltipColor: '#e6eec8',
    },
    {
      label: 'ביטוח רכב',
      data: 96456,
      backgroundColor: '#f92020',
      hoverBackgroundColor: '#f92020',
      tooltipColor: '#facbcb',
    },
  ]

  return (
      // <div>
      <div style={{paddingTop: '100px', paddingLeft: '300px'}}>
        <SavingsChart data={chartPieData} title={"?כמה חסכתי עד היום"}/>
      </div>
  )
}

export default App
