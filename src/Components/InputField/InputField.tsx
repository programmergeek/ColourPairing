import React, { useState } from "react";
import { ColorPicker } from "react-pick-color";

export const InputField: React.FC = () => {
  const [colour, setColour] = useState("");

  const handleColourChange = (colour: string) => {
    if (colour[0] === "#") {
      setColour(colour);
    } else {
      setColour(`#${colour}`);
    }
  };

  return (
    <div className="field-container">
      <input
        className="input-field"
        value={colour.toUpperCase()}
        onChange={(e) => handleColourChange(e.target.value)}
      />
      <div className="colour-picker">
        <ColorPicker
          color={colour.toUpperCase()}
          onChange={(colour) => handleColourChange(colour.hex.toUpperCase())}
        />
      </div>
    </div>
  );
};
