import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Minimal single-page UI that displays a centered "Hello World" message. */
  return (
    <div className="App">
      <main className="Page" role="main">
        <section className="Card" aria-label="Hello World">
          <div className="Badge" aria-hidden="true" />
          <h1 className="Title">Hello World</h1>
          <p className="Subtitle">
            A minimal React app with a modern light theme and subtle blue/cyan accents.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
