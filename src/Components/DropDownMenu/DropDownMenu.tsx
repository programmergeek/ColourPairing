import React, { useState } from "react";
import { InputField } from "..";
import "./styles.css";

interface Props {
  header: string;
  fields: string[];
}

export const DropDownMenu: React.FC<Props> = ({ ...props }: Props) => {
  const [isHidden, setIsHidden] = useState(false);

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
      <div className={`fields ${isHidden ? "hide" : "show"}`}>
        {props.fields.map((field, key) => {
          return (
            <div className="field" key={key}>
              <p className="label"> {field} </p>
              <InputField />
            </div>
          );
        })}
      </div>
    </div>
  );
};
