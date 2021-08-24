import React, { useState } from "react";
import { CodeBlock, DropDownMenu, InputField } from "../../Components";
import { Props } from "../../Components/typeDefinitions";
import "./styles.css";

interface ColourSettingProps {
  onChange?: (colours: Props) => void;
}

export const ColourSettings: React.FC<ColourSettingProps> = ({
  ...props
}: ColourSettingProps) => {
  const [colours, setColours] = useState<Props>({
    colours: {
      background: "#fff",
      text: "#000",
    },
  });

  return (
    <div className="colour-settings">
      <h1 className="header-cs">Colour Settings</h1>
      <div id="background-and-text">
        <div id="background" style={{ zIndex: 1000 }}>
          <label className="label"> Background Colour</label>
          <InputField
            onChange={(input) => {
              setColours((currentState) => {
                currentState.colours["background"] = input;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
        <div id="text" style={{ zIndex: 1000 }}>
          <label className="label"> Text Colour</label>
          <InputField
            onChange={(textColour) => {
              setColours((currentState) => {
                currentState.colours["text"] = textColour;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
      </div>
      <div className="drop-menus">
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Primary Button"
            onChange={(primaryColours) => {
              setColours((currentState) => {
                currentState.colours["primaryButton"] = primaryColours;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Secondary Button"
            onChange={(secondaryColours) => {
              setColours((currentState) => {
                currentState.colours["secondaryButton"] = secondaryColours;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Background Colour", "Border Colour", "Text Colour"]}
            header="Tertiary Button"
            onChange={(tertiaryColours) => {
              setColours((currentState) => {
                currentState.colours["tertiaryButton"] = tertiaryColours;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
        <div className="menu">
          <DropDownMenu
            fields={["Primary Colour", "Secondary Colour"]}
            header="Art"
            onChange={(artColours) => {
              setColours((currentState) => {
                currentState.colours["clipArt"] = artColours;
                if (props.onChange) props.onChange(currentState);
                return { ...currentState };
              });
            }}
          />
        </div>
      </div>
      <div className="code-block-cs">
        {console.log(colours.colours)}
        <CodeBlock colours={colours.colours} />
      </div>
    </div>
  );
};
