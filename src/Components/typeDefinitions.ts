export interface Props {
  colours: {
    background: string;
    text: string;
    primaryButton?: {
      "Background Colour"?: string;
      "Border Colour"?: string;
      "Text Colour"?: string;
    };
    secondaryButton?: {
      "Background Colour"?: string;
      "Border Colour"?: string;
      "Text Colour"?: string;
    };
    tertiaryButton?: {
      "Background Colour"?: string;
      "Border Colour"?: string;
      "Text Colour"?: string;
    };
    clipArt?: {
      "Primary Colour"?: string;
      "Secondary Colour"?: string;
    };
  };
}
