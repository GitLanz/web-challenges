import Card from "./components/Card";

export default function App() {
  // const fruits = [];

  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1336,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1335,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1334,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1333,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}

      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
