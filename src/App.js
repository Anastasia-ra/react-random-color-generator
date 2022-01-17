import {
  buttonStyle,
  inputStyle,
  labelStyle,
  appStyle,
  formStyle,
} from './style.js';
import React, { useState } from 'react';
import randomColor from 'randomcolor';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [hue, setHue] = useState();
  const [luminosity, setLuminosity] = useState();
  const [width, setWidth] = useState('400');
  const [height, setHeight] = useState('50');

  function chooseHue(event) {
    setHue(event.currentTarget.value);
  }
  function chooseLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }
  function chooseWidth(event) {
    setWidth(event.currentTarget.value);
  }
  function chooseHeight(event) {
    setHeight(event.currentTarget.value);
  }

  function handleChange() {
    const newColor = randomColor({
      luminosity: luminosity,
      hue: hue,
    });
    setColor(newColor);
  }

  return (
    <div className="App" css={appStyle}>
      <div css={formStyle}>
        <label css={labelStyle}>
          Choose a hue:
          <input
            css={inputStyle}
            className="userInput"
            onChange={chooseHue}
            value={hue}
          />
        </label>{' '}
      </div>
      <label css={labelStyle}>
        Choose a luminosity:
        <input
          css={inputStyle}
          className="userInput"
          onChange={chooseLuminosity}
          value={luminosity}
        />
      </label>
      <label css={labelStyle}>
        Box width:
        <input
          css={inputStyle}
          className="userInput"
          onChange={chooseWidth}
          value={width}
        />
      </label>
      <label css={labelStyle}>
        Box height:
        <input
          css={inputStyle}
          className="userInput"
          onChange={chooseHeight}
          value={height}
        />
      </label>
      <button css={buttonStyle} onClick={handleChange}>
        Generate
      </button>
      <div
        css={labelStyle}
        style={{
          margin: '20px',
          backgroundColor: color,
          width: Number(width),
          height: Number(height),
          textAlign: 'center',
          //transition: all 2s ease,
        }}
      >
        Generated color: {color}
      </div>
    </div>
  );
}

export default App;
