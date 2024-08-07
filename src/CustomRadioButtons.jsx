import React, { useState } from 'react';



// Utility function to handle arrow key navigation
const handleArrowNavigation = (event, index, setActiveIndex, radioButtonsLength) => {
  console.log( "index", index);
  index = index + 1;
  console.log( "radioButtonsLength", radioButtonsLength);
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault();
    const nextIndex = (index + 1) % radioButtonsLength;
    setActiveIndex(nextIndex);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault();
    const prevIndex = (index - 1 + radioButtonsLength) % radioButtonsLength;
    setActiveIndex(prevIndex);
  }
}

const CustomRadioButtons = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{display: 'flex'}}>
      {options.map((option, index) => (
        <div
          key={option.value}
          tabIndex={0}
          role="radio"
          aria-checked={activeIndex === index}
          onClick={() => setActiveIndex(index)}
          onKeyDown={(e) => handleArrowNavigation(e, index, setActiveIndex, options.length)}
          style={{
            cursor: 'pointer',
            padding: '10px',
            width: '150px',
            height: '150px',
            border: activeIndex === index ? '2px solid blue' : '2px solid grey',
            borderRadius: '4px',
            margin: '5px',
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default CustomRadioButtons;




