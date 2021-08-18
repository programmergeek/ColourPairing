import React from "react";
import { ColorPicker } from "react-pick-color";

export const InputField: React.FC = () => {
  return (
    <div className="field-container">
      <input className="input-field" />
      <div className="colour-picker">
        <ColorPicker />
      </div>
    </div>
  );
};
