import React from "react";
import { CodeBlock, DropDownMenu, InputField } from "../../Components";
import "./styles.css";

export const ColourSettings: React.FC = () => {
  return (
    <div className="colour-settings">
      <h1 className="header-cs">Colour Settings</h1>
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
      <div className="drop-menus">
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Primary Button"
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Secondary Button"
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Tertiary Button"
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Primary Colour", "Secondary Colour"]}
            header="Art"
          />
        </div>
      </div>
      <div className="code-block-cs">
        <CodeBlock colours={{ background: "#000", text: "#fff" }} />
      </div>
    </div>
  );
};
