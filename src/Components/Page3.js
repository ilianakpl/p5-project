import React, { useEffect, useRef } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
const AudioContext = window.AudioContext || window.webkitAudioContext;

export function Page3() {
  const audioContextRef = useRef();
  const audioContext = new AudioContext();
  const osc = audioContext.createOscillator();

  useEffect(() => {
    osc.type = "square";
    osc.frequency.value = 500;
    osc.connect(audioContext.destination);
    osc.start();
    audioContextRef.current = audioContext;
    audioContext.suspend();

    return () => osc.disconnect(audioContext.destination);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let rotation = null;

  const convertRotation = (rotation) => {
    return (rotation * Math.PI) / 180;
  };

  const handleRotation = (e) => {
    rotation = convertRotation(e.target.value);
    osc.frequency.value = e.target.value * 4;
    audioContextRef.current.resume();
  };

  const toggleOscillator = () => {
    audioContextRef.current.suspend();
  };

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight - 150, p.WEBGL);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
      if (props.rotation !== null) {
        rotation = convertRotation(props.rotation);
      }
    };

    p.draw = () => {
      p.background(0);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.box(200);
      p.pop();
    };
  };

  const changeOscType = () => {
    const types = ["sine", "square", "sawtooth", "triangle"];
    let index = Math.floor(Math.random() * types.length);
    osc.type = types[index];
  };

  return (
    <>
      <ReactP5Wrapper sketch={sketch} rotation={45} />
      <input
        style={{ width: "500px" }}
        type="range"
        min={0}
        max={360}
        onChange={handleRotation}
        className="form-range"
      />
      <div>
        <button onClick={toggleOscillator} className="btn btn-dark">
          <span>{"Pause"}</span>
        </button>

        <button
          onClick={changeOscType}
          className="btn btn-dark"
          style={{ marginLeft: "20px" }}
        >
          <span>{"Change wave type"}</span>
        </button>
      </div>
    </>
  );
}
