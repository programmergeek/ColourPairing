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
      </div>
    </div>
  );
};
