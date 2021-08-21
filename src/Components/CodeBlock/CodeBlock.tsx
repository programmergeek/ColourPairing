import React from "react";
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
      firstCircle: string;
      secondCircle: string;
    };
  };
}

export const CodeBlock: React.FC<Props> = ({ ...props }: Props) => {
  const stylesCSS = `
    --background-colour: ${props.colours.background};
    --text-colour: ${props.colours.text};
    --primary-button-background-colour: ${props.colours.primaryButton?.background}
    `;

  return <div className="code-block-container"></div>;
};
