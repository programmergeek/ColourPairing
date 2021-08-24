import React, { useState } from "react";
import "./App.css";
import { Props } from "./Components/typeDefinitions";
import { ColourSettings, Output } from "./Module";

const App: React.FC = () => {
  const [state, setState] = useState<Props>({
    colours: {
      background: "#fff",
      text: "#000",
    },
  });

  return (
    <div className="App">
      <ColourSettings
        onChange={(colours) => {
          setState(colours);
        }}
      />
      <Output colours={state?.colours} />
    </div>
  );
};

export default App;
