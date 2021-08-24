import React, { useState } from "react";
import "./styles.css";
import { Props } from "../typeDefinitions";

const varNames = [
  "background-colour",
  "text-colour",
  "primary-button-background-colour",
  "primary-button-border-colour",
  "primary-button-text-colour",
  "secondary-button-background-colour",
  "secondary-button-border-colour",
  "secondary-button-text-colour",
  "tertiary-button-background-colour",
  "tertiary-button-border-colour",
  "tertiary-button-text-colour",
  "primary-art-colour",
  "secondary-art-colour",
];

export const CodeBlock: React.FC<Props> = ({ ...props }: Props) => {
  const [isCSS, setIsCSS] = useState(true);

  return (
    <div className="code-container">
      <div id="styles">
        <p
          id="css"
          className={`${isCSS ? "selected" : ""}`}
          onClick={() => setIsCSS(true)}
        >
          CSS
        </p>
        <p
          id="scss"
          className={`${isCSS ? "" : "selected"}`}
          onClick={() => setIsCSS(false)}
        >
          Sass
        </p>
      </div>
      <div className="code-block-container">
        <p
          className="copy"
          onClick={() => {
            const variables = document.getElementsByClassName("style-var");
            navigator.clipboard.writeText("");
            navigator.clipboard.readText().then(() => {
              let t = "";
              for (let i = 0; i < variables.length; i++) {
                t += variables[i].textContent + "\n";
              }
              navigator.clipboard.writeText(t);
            });
          }}
        >
          Copy
        </p>
        <code className="variables">
          {"html {"}
          <br />
          <code className="style-var">
            {`${isCSS ? "--" : "$"}`}
            {`${varNames[0]} : ${props.colours.background};`}
          </code>
          <br />
          <code className="style-var">
            {`${isCSS ? "--" : "$"}`}
            {`${varNames[1]} : ${props.colours.text};`}
          </code>
          <br />
          {props.colours.primaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[2]} : ${
                props.colours.primaryButton["Background Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.primaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[3]} : ${
                props.colours.primaryButton["Border Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.primaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[4]} : ${
                props.colours.primaryButton["Text Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[5]} : ${
                props.colours.secondaryButton["Background Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[6]} : ${
                props.colours.secondaryButton["Border Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[7]} : ${
                props.colours.secondaryButton["Text Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[8]} : ${
                props.colours.tertiaryButton["Background Colour"]
              };`}{" "}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[9]} : ${
                props.colours.tertiaryButton["Border Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[10]} : ${
                props.colours.tertiaryButton["Text Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.clipArt ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[11]} : ${
                props.colours.clipArt["Primary Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.clipArt ? (
            <code className="style-var">
              {`${isCSS ? "--" : "$"}${varNames[12]} : ${
                props.colours.clipArt["Secondary Colour"]
              };`}
              <br />
            </code>
          ) : null}
          {"}"}
        </code>
      </div>
    </div>
  );
};
