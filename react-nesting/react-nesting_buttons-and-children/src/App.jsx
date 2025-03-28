import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me one time!</Button>
      <Button>Click me two times!</Button>
      <Button>Click me three times!</Button>
      <Button>Click me four times!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
