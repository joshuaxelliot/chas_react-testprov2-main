import { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
