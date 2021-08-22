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
  return (
    <div className="code-block-container">
      <p
        className="copy"
        onClick={() => {
          navigator.clipboard.writeText("This is Sparta");
        }}
      >
        Copy
      </p>
      <p className="code"></p>
    </div>
  );
};
