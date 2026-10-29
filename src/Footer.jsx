
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>🍷 Wine House</h2>

      <p>
        Discover our collection of wines and
        refreshing beverages.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Drinks</a>
      </div>

      <p className="copyright">
        © 2026 Wine House. All rights reserved.
      </p>

      <small>
        Please drink responsibly. Alcohol is for
        adults of legal drinking age only.
      </small>
    </footer>
  );
}

export default Footer;
