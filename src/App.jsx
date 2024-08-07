import React from 'react'
import SavingsChart from './SavingsChart.jsx'
import CustomRadioButtons from './CustomRadioButtons.jsx'

function App() {

// Example usage
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

  return (
      <div>
        jhjh
        <CustomRadioButtons
        options={options}
        
        />
        {/* <SavingsChart /> */}
      </div>
  )
}

export default App
