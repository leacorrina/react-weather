import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <h3>
        Coded by Lea White and{" "}
        <a href="https://github.com/leacorrina/react-weather" target="">
          open-sourced on GitHub
        </a>
      </h3>
    </div>
  );
}

export default App;
