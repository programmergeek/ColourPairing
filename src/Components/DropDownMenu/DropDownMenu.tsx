import React, { useState } from "react";
import { InputField } from "..";
import "./styles.css";

interface Props {
  header: string;
  fields: string[];
  onChange?: (colours: Record<string, unknown>) => void;
}

export const DropDownMenu: React.FC<Props> = ({ ...props }: Props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [colours, setColours] = useState<Record<string, unknown>>();

  return (
    <div className="drop-menu-container">
      <p
        className="header"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {" "}
        {props.header}{" "}
      </p>
      <div
        className={`fields ${isHidden ? "hide-fields" : "show-fields"}`}
        style={{ height: props.fields.length * 70 }}
      >
        {props.fields.map((field, key) => {
          return (
            <div
              className={`field ${isHidden ? "hide" : "show"}`}
              key={key}
              style={{ zIndex: props.fields.length - key }}
            >
              <p className="label"> {field} </p>
              <InputField
                onChange={(e) => {
                  setColours((colours) => {
                    return { [props.header]: { ...colours, [field]: e } };
                  });
                  if (props.onChange)
                    props.onChange(colours as Record<string, unknown>);
                }}
              />
            </div>
          );
        })}
        {console.log(colours)}
      </div>
    </div>
  );
};
