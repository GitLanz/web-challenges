import logo from "./img/logo.jpg";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
    </header>
  );
}
