import './App.css';
import React, { useState } from 'react';

function Star(x){
  let text = ""
  if (x > 1)
      for (let i = 1; i < x; i++)
          text += "*".repeat(i) + "\n";
      for (let i = x; i > 1; i--)
          text += "*".repeat(i) + "\n";
  if (x > 0)
      text += "*"
  return text
}

function App() {
  const [inputValue, setInputValue] = useState();
  const [starPattern, setStarPattern] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const starResult = Star(Number(inputValue));
    setStarPattern(starResult);
  };
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label>
        Input :
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div>
      <pre>{starPattern}</pre>
    </div>
  </div>
  );
}

export default App;
