import React from 'react'

export default function Hue(props) {
  return (
    <div>
      <p>Hue: {props.xHue}</p>
      <input
        max="360"
        type="range"
        value={props.xHue}
        onChange={(event) => props.xSetHue(event.target.value)}
      />
    </div>
  )
}
