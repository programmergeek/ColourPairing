import React, { useState } from "react";
import "./styles.css";

interface Props {
  colours: {
    background: string;
    text: string;
    primaryButton?: {
      background: string;
      border: string;
      text: string;
    };
    secondaryButton?: {
      background: string;
      border: string;
      text: string;
    };
    tertiaryButton?: {
      background: string;
      border: string;
      text: string;
    };
    clipArt?: {
      primary: string;
      secondary?: string;
    };
  };
}

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
            navigator.clipboard.writeText("This is Sparta");
          }}
        >
          Copy
        </p>
        <code className="variables">
          html{"{"}
          <br />
          {`${isCSS ? "--" : "$"}`}
          {`${varNames[0]} : ${props.colours.background};`}
          <br />
          {`${isCSS ? "--" : "$"}`}
          {`${varNames[1]} : ${props.colours.text};`}
          <br />
          {props.colours.primaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[2]} : ${
                props.colours.primaryButton.background
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.primaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[3]} : ${
                props.colours.primaryButton.border
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.primaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[4]} : ${
                props.colours.primaryButton.text
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[5]} : ${
                props.colours.secondaryButton.background
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[6]} : ${
                props.colours.secondaryButton.border
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.secondaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[7]} : ${
                props.colours.secondaryButton.text
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[8]} : ${
                props.colours.tertiaryButton.background
              };`}{" "}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[9]} : ${
                props.colours.tertiaryButton.border
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.tertiaryButton ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[10]} : ${
                props.colours.tertiaryButton.text
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.clipArt ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[11]} : ${
                props.colours.clipArt.primary
              };`}
              <br />
            </code>
          ) : null}
          {props.colours.clipArt ? (
            <code>
              {`${isCSS ? "--" : "$"}${varNames[12]} : ${
                props.colours.clipArt.secondary
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
