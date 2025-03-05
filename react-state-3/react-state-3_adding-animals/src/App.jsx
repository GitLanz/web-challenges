import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  // const newAnimals = initialAnimals.map((animal) => (
  //   <li key={initialAnimals.id}>{initialAnimals.name}</li>
  // ));
  console.log(animals);

  function handleAddAnimal(newAnimal) {
    // console.log(newAnimal);

    newAnimal.id = uid();
    setAnimals([...animals, newAnimal]);
    // `setXzys([...xyzs, {id: uid(), ...newXyz}]);`
    // handleAddAnimal({id: 3, name: "Spruce", height: 13})
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
