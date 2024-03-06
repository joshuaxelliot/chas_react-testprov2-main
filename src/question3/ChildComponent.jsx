import React from 'react';

const ChildComponent = ({ onColorChange }) => {
  let selectedColor = '';

  const handleChange = (e) => {
    const color = e.target.value;
    selectedColor = color;
    onColorChange(color);
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleChange}>
        <option value="">Choose a color</option>
        <option value="Black">Black</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
    </div>
  );
};

export default ChildComponent;
