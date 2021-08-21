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
      primary: string;
      secondary?: string;
    };
  };
}

export const CodeBlock: React.FC<Props> = ({ ...props }: Props) => {
  const stylesCSS = `
    --background-colour: ${props.colours.background};
    --text-colour: ${props.colours.text};
    --primary-button-background-colour: ${props.colours.primaryButton?.background};
    --primary-button-border-colour: ${props.colours.primaryButton?.border};
    --primary-button-text-colour: ${props.colours.primaryButton?.text};
    --secondary-button-background-colour: ${props.colours.secondaryButton?.background};
    --secondary-button-border-colour: ${props.colours.secondaryButton?.border};
    --secondary-button-text-colour: ${props.colours.secondaryButton?.text};
    --tertiary-button-background-colour: ${props.colours.tertiaryButton?.background};
    --tertiary-button-border-colour: ${props.colours.tertiaryButton?.border};
    --tertiary-button-text-colour: ${props.colours.tertiaryButton?.text};
    --art-primary-colour: ${props.colours.clipArt?.primary};
    --art-secondary-colour: ${props.colours.clipArt?.secondary};
    `;
  const stylesSCSS = `
    $background-colour: ${props.colours.background};
    $text-colour: ${props.colours.text};
    $primary-button-background-colour: ${props.colours.primaryButton?.background};
    $primary-button-border-colour: ${props.colours.primaryButton?.border};
    $primary-button-text-colour: ${props.colours.primaryButton?.text};
    $secondary-button-background-colour: ${props.colours.secondaryButton?.background};
    $secondary-button-border-colour: ${props.colours.secondaryButton?.border};
    $secondary-button-text-colour: ${props.colours.secondaryButton?.text};
    $tertiary-button-background-colour: ${props.colours.tertiaryButton?.background};
    $tertiary-button-border-colour: ${props.colours.tertiaryButton?.border};
    $tertiary-button-text-colour: ${props.colours.tertiaryButton?.text};
    $art-primary-colour: ${props.colours.clipArt?.primary};
    $art-secondary-colour: ${props.colours.clipArt?.secondary};
    `;

  return <div className="code-block-container"></div>;
};
