import './App.css';
import React, { useState } from 'react';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [hue, setHue] = useState();
  const [luminosity, setLuminosity] = useState();

  function chooseHue(event) {
    setHue(event.currentTarget.value);
  }
  function chooseLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }
  function handleChange() {
    // const newHue = window.prompt('Hue ?');
    // const newLuminosity = window.prompt('Luminosity ?');
    const newColor = randomColor({
      luminosity: luminosity,
      hue: hue,
    });
    setColor(newColor);
  }

  return (
    <div className="App">
      <label>
        Choose a hue:
        <input onChange={chooseHue} value={hue} />
      </label>
      <label>
        Choose a luminosity:
        <input onChange={chooseLuminosity} value={luminosity} />
      </label>
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
