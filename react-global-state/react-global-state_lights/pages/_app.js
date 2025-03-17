import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialIsOn = [
  { id: "1", roomName: "Living Room", count: false },
  { id: "1", roomName: "Kitchen", isOn: false },
  { id: "1", roomName: "Bedroom", isOn: false },
  { id: "1", roomName: "Bathroom", isOn: false },
  { id: "1", roomName: "Garage", isOn: false },
  { id: "1", roomName: "Porch", isOn: false },
  { id: "1", roomName: "Garden", isOn: false },
  { id: "1", roomName: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(initialIsOn);
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} isOn={isOn} />
    </Layout>
  );
}

function handleToggle() {
  setIsOn((isOn) => !isOn);
  isOn.map((isOn) => <Component key={isOn.id} roomName={isOn.roomName} />);
}
