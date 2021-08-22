import React from "react";
import "./App.css";
import { DropDownMenu, CodeBlock } from "./Components";

const App: React.FC = () => {
  return (
    <div className="App">
      <DropDownMenu
        fields={["Background Colour", "Font Colour"]}
        header="Primary"
      />

      <CodeBlock
        colours={{
          background: "#000",
          text: "#fff",
          primaryButton: {
            background: "#1f2ea5",
            border: "#222",
            text: "#fff",
          },
        }}
      />
    </div>
  );
};

export default App;
