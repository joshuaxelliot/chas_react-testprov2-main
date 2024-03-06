import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleColorChange = (color) => {
    setFavoriteColor(color);
  };

  return (
    <div>
      <ChildComponent onColorChange={handleColorChange} />
      {favoriteColor && <p>My favorite color is {favoriteColor}.</p>}
    </div>
  );
};

export default ParentComponent;
