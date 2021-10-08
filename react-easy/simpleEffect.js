import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (input.length > 240) {
      setValid(false);
    }
  }, [input]);

  return (
    <>
      <p> You have {240 - input.length} character left </p>
      <input
        type="text"
        placeholder="Status"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={!valid}>Submit</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
