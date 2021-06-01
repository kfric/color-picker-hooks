import React, { useState } from 'react'
import Hue from './components/Hue'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(50)

  function handleRandomColor() {
    ;({
      hue: setHue(Math.floor(Math.random() * 360)),
      saturation: setSaturation(Math.floor(Math.random() * 360)),
      lightness: setLightness(Math.floor(Math.random() * 100)),
    })
  }

  return (
    <>
      <h1>Color Picker with Hooks</h1>
      <div
        className="changeColor"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      >
        hsl(hue: {hue}, saturation: {saturation}%, lightness: {lightness}%)
      </div>

      <Hue xHue={hue} xSetHue={setHue} />

      <p>Saturation: {saturation}</p>
      <input
        max="100"
        type="range"
        value={saturation}
        onChange={(event) => setSaturation(event.target.value)}
      />
      <p>Lightness: {lightness}</p>
      <input
        max="100"
        type="range"
        value={lightness}
        onChange={(event) => setLightness(event.target.value)}
      />
      <p>
        <button onClick={handleRandomColor}>Random</button>
      </p>
    </>
  )
}
