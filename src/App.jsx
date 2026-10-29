
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <p className="subtitle">KOSHAL WIN SHOP</p>

          <h1>Discover Your Perfect Pour</h1>

          <p>
            Explore our collection of wines and
            refreshing beverages.
          </p>

          <a href="#products" className="hero-btn">
            Explore Collection
          </a>
        </section>

        <section className="products" id="products">
          <h2>Our Collection</h2>
          <p>Discover drinks for every occasion.</p>
        </section>

        <section className="about" id="about">
          <h2>About Wine House</h2>
          <p>
            A welcoming place to explore our beverage
            collection and learn about different flavors.
          </p>
        </section>
        
<section className="about" id="about">
  <div className="about-text">
    <p className="subtitle">ABOUT US</p>
    <h2>Our Story</h2>

    <p>
      Welcome to Wine House — your destination
      for exploring wines and refreshing beverages.
      We believe every occasion deserves a special touch.
    </p>

    <p>
      Discover our collection and learn about
      different flavors, traditions and quality.
    </p>

    <h3>Good Drinks. Better Moments.</h3>
  </div>

  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80"
      alt="Wine glasses and wine bottles"
    />
  </div>
</section>


<section className="products" id="products">
  <p className="eyebrow">OUR COLLECTION</p>
  <h2>Discover Our Drinks</h2>
  <p>Explore our beautiful collection.</p>

  <div className="product-grid">
    <article className="product-card">
      <img
        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80"
        alt="Red wine bottles and glasses"
      />
      <h3>Red Wine</h3>
      <p>Discover rich aromas and distinctive flavors.</p>
    </article>

    <article className="product-card">
      <img
        src="https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=700&q=80"
        alt="Wine glasses and bottle"
      />
      <h3>White Wine</h3>
      <p>Explore refreshing wine varieties.</p>
    </article>

    <article className="product-card">
      <img
        src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=700&q=80"
        alt="Grapes and wine"
      />
      <h3>Grape Collection</h3>
      <p>Discover grapes and winemaking traditions.</p>
    </article>

    <article className="product-card">
      <img
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80"
        alt="Beautifully presented drinks"
      />
      <h3>Special Occasions</h3>
      <p>Explore drinks for memorable occasions.</p>
    </article>
  </div>
</section>

<section className="contact-section" id="contact">
  <p className="eyebrow">GET IN TOUCH</p>
  <h2>Contact Wine House</h2>
  <p>Have a question? Contact us using the details below.</p>

  <div className="contact-details">
    <a href="tel:9780616516">
      📞 Call: 9780616516
    </a>

    <a href="mailto:koshal18bathla@gmail.com">
      ✉️ Email: koshal18bathla@gmail.com
    </a>
  </div>
</section>




      </main>

      <Footer />
    </>
  );
}

export default App;
