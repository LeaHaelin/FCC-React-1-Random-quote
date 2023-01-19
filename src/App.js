import React, { useState } from "react";
import { Quote } from "./partials/Quote";
import axios from "axios";
import "./styles/app.css";
import generateColor from "./color";

function App() {
  const [quote, setQuote] = useState(
    {
      "text": "Knowing is not enough; we must apply!",
      "author": "Johann Wolfgang von Goethe"
    }
  );
  //colors and styles
  const [colors, setColors] = useState(generateColor());
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  const backgroundStyles = { backgroundColor: randomColors.color, transition: "0.3s all ease-in" };
  const itemStyles = { color: randomColors.color, transition: "0.3s all ease-in" };

  return (
    <div className="App" style={backgroundStyles}>
      <Quote quote={quote} setQuote={setQuote} backgroundStyles={backgroundStyles} itemStyles={itemStyles} />
    </div>
  );
}

export default App;
