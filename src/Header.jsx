
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        🍷 Wine House
      </a>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Drinks</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#products" className="header-btn">
        Explore Drinks
      </a>
    </header>
  );
}

export default Header;
