import { useColor } from './ColorContext';

const ColorSelector = () => {
  const { color, setColor } = useColor();

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Färgselector</h2>
      <select value={color} onChange={handleChange}>
        <option value="">Välj en färg</option>
        <option value="black">Svart</option>
        <option value="grey">Grå</option>
        <option value="blue">Blå</option>
        <option value="yellow">Gul</option>
      </select>
    </div>
  );
};

export default ColorSelector;
