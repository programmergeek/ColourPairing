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
  return <div className="code-block-container"> </div>;
};
