import React from "react";
import "./App.css";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";

function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;