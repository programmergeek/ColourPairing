import React, { useState } from "react";
import "./App.css";
import { DropDownMenu, CodeBlock } from "./Components";

const App: React.FC = () => {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <DropDownMenu
        fields={["Background Colour", "Font Colour"]}
        header="Primary"
        onChange={(e) => setState(e)}
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
      {console.log(state)}
    </div>
  );
};

export default App;
