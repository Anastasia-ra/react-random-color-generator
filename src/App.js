import './App.css';
import { useState } from 'react';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState('#FFFFFF');

  function handleChange() {
    const newColor = randomColor();
    setColor(newColor);
  }

  return (
    <div className="App">
      <button onClick={handleChange}>Generate</button>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        Generated color: {color}
      </div>
    </div>
  );
}

export default App;
