import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  return (
    <>
      <Counter />
    </>
  );
}
function Counter() {
  function handleClick1() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(count - 1);
  }
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleClick2}>
          -
        </button>
        <button type="button" onClick={handleClick1}>
          +
        </button>
      </div>
    </div>
  );
}
