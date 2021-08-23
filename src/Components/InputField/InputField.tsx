import React, { useState } from "react";
import { ColorPicker } from "react-pick-color";
import "./styles.css";

interface Props {
  onChange?: (colour: string) => void;
}

export const InputField: React.FC<Props> = ({ ...props }: Props) => {
  const [colour, setColour] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleColourChange = (colour: string) => {
    if (colour[0] === "#") {
      setColour(colour);
    } else {
      setColour(`#${colour}`);
    }
    if (props.onChange) props.onChange(colour);
  };

  return (
    <div className="field-container">
      <input
        className="input-field"
        value={colour.toUpperCase()}
        onChange={(e) => handleColourChange(e.target.value)}
        onClick={() => setShowPicker(true)}
      />
      <div
        className={`colour-picker ${showPicker ? "" : "hidden"}`}
        onMouseLeave={() => setShowPicker(false)}
      >
        <ColorPicker
          color={colour.toUpperCase()}
          onChange={(colour) => handleColourChange(colour.hex.toUpperCase())}
        />
      </div>
    </div>
  );
};
