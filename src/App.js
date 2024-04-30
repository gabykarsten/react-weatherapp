import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Jakarta" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/gabykarsten/react-weatherapp">
            Gabriella Karsten
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gabykarsten/react-weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
