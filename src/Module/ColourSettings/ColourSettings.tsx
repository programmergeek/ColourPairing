import React from "react";
import { InputField } from "../../Components";
import "./styles.css";

export const ColourSettings: React.FC = () => {
  return (
    <div className="colour-settings">
      <h1 className="header">Colour Settings</h1>
      <div id="background-and-text">
        <div id="background">
          <label className="label"> Background Colour</label>
          <InputField />
        </div>
        <div id="text">
          <label className="label"> Text Colour</label>
          <InputField />
        </div>
      </div>
    </div>
  );
};
