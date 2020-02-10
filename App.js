import React from "react";
import "./App.css";
import Myswitchwithstateandclass from "./Myswitchwithstateandclass";
import Example from "./Example";
import Myswitchwithfunction from "./Myswitchwithfunction";
import Myswitchwithpropsandclass from "./Myswitchwithpropsandclass";

function App() {
  return (
    <div className="App">
      <h1>Hello From React App</h1>
      <Example></Example>
      <h1>Switch using state and class</h1>
      <Myswitchwithstateandclass></Myswitchwithstateandclass>
      <h1>Switch using state and function</h1>
      <Myswitchwithfunction></Myswitchwithfunction>
      <h1>Switch using props and class</h1>
      <Myswitchwithpropsandclass isOn="true"></Myswitchwithpropsandclass>
    </div>
  );
}

export default App;
