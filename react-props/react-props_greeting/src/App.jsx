export default function App() {
  function handleGreetings() {
    console.log("Welcome");
    return "Done";
  }
  return (
    <p>
      <Greeting name="Mr. and Mrs.!" />
      <Greeting isCoach />
    </p>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <>
      <h1>Hello, {name}</h1>
      <h1>{isCoach ? "Coach!" : "Stranger!"}</h1>&nbsp;
    </>
  );
}
// {isCoach ? "Coach" : "Stranger"}&nbsp;
