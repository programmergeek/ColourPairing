import React from "react";
import { InputField } from "..";
import "./styles.css";

interface Props {
  header: string;
  fields: string[];
}

export const DropDownMenu: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <div className="drop-menu-container">
      <p className="header"> {props.header} </p>
      <div className="fields">
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
