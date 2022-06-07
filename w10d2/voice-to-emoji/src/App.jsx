import { useState } from "react";

import "./App.css";
import { listenerOptions, startListening } from "./helpers/voiceHelpers";

function App() {
  const labels = ["🦗🦗🦗", "🙅🙅🙅", "🏎️🚗🏎️", "🧀🧀🧀", "🥔🥔🥔", "🐔🐔🐔", "🍠🍠🍠"];
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Super voice to emoji ! :D </h1>
        {!isReady && (
          <button
            onClick={() => startListening(listenerOptions, setIsReady, setCurrentIndex)}
          >
            START THE LISTEN
          </button>
        )}
      </header>
      <section>
        <span style={{ fontSize: 50 }}>{labels[currentIndex]}</span>
      </section>
    </div>
  );
}

export default App;
