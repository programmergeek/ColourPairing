import React from "react";
import "./styles.css";

interface Props {
  colours: {
    background: string;
    text: string;
    primary?: {
      primary: string;
      border: string;
      text: string;
    };
    secondary?: {
      primary: string;
      border: string;
      text: string;
    };
    tertiary?: {
      primary: string;
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
  return <div></div>;
};
