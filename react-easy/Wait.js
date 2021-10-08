import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Wait({ delay = 1000, placeholder, ui }) {
  const [result, setResult] = useState(placeholder);

  setTimeout(() => {
    setResult(ui);
  }, delay);

  return result;
}

function App() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
