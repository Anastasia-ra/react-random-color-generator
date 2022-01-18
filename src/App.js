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
// import { DvdScreensaver } from 'react-dvd-screensaver';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [hue, setHue] = useState();
  const [luminosity, setLuminosity] = useState('');
  const [width, setWidth] = useState('400');
  const [height, setHeight] = useState('50');
  const [displayedWidth, setDisplayedWidth] = useState('400');
  const [displayedHeight, setDisplayedHeight] = useState('50');
  const [textColor, setTextColor] = useState('#524949');

  // Generate random color when "Generate" button is clikced + Change color and dimensions of Generated Color Div
  function handleChange() {
    const newColor = randomColor({
      luminosity: luminosity,
      hue: hue,
    });
    setColor(newColor);
    setDisplayedWidth(width);
    setDisplayedHeight(height);
    luminosity === 'dark' ? setTextColor('#FFFFFF') : setTextColor('#524949');
  }

  // Style Generated Color Div
  const colorDivStyle = css`
    display: block;
    font: Arial, Helvetica, sans-serif;
    color: #524949;
    font-size: 2em;
    margin: 20px;
    transition: background-color 3s;
  `;

  return (
    <div className="App" css={appStyle}>
      <div css={formStyle}>
        <label css={labelStyle}>
          Choose a hue:
          <input
            css={inputStyle}
            className="userInput"
            onChange={(event) => setHue(event.currentTarget.value)}
            value={hue}
          />
        </label>{' '}
      </div>
      <label css={labelStyle}>
        Choose a luminosity:
        <input
          css={inputStyle}
          className="userInput"
          onChange={(event) => setLuminosity(event.currentTarget.value)}
          value={luminosity}
        />
      </label>
      <label css={labelStyle}>
        Box width:
        <input
          css={inputStyle}
          className="userInput"
          onChange={(event) => setWidth(event.currentTarget.value)}
          value={width}
        />
      </label>
      <label css={labelStyle}>
        Box height:
        <input
          css={inputStyle}
          className="userInput"
          onChange={(event) => setHeight(event.currentTarget.value)}
          value={height}
        />
      </label>
      <button css={buttonStyle} onClick={handleChange}>
        Generate
      </button>
      <div
        css={colorDivStyle}
        style={{
          color: textColor,
          backgroundColor: color,
          width: Number(displayedWidth),
          height: Number(displayedHeight),
          textAlign: 'center',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}

export default App;
