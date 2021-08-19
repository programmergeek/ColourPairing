import React from "react";
import "./App.css";
import { DropDownMenu } from "./Components";

const App: React.FC = () => {
  return (
    <div className="App">
      <DropDownMenu
        fields={["Background Colour", "Font Colour"]}
        header="Primary"
      />
    </div>
  );
};

export default App;
