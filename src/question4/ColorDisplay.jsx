import React from 'react';
import { useColor } from './ColorContext';

const ColorDisplay = () => {
  const { color } = useColor();

  return (
    <div>
      <h2>Display:</h2>
      <div style={{ width: '100px', height: '100px', backgroundColor: color }}></div>
    </div>
  );
};

export default ColorDisplay;
