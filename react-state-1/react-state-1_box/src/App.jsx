import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  // let [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
