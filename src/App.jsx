import React, { useState } from "react";
import {
  ArrowRight, CakeSlice, Check, ChevronDown, Heart, Instagram,
  Leaf, Menu, MessageCircle, Phone, ShoppingBag, Sparkles, Star, X
} from "lucide-react";

const PHONE = "919361901746";
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const displayPhone = "+91 9361901746";

const products = [
  {
    name: "Classic Fudge Brownie",
    desc: "Rich, fudgy and deeply chocolatey.",
    price: "From ₹30",
    image: asset("images/brownie-1.jpg"),
    tag: "Best Seller"
  },
  {
    name: "Almond Brownie",
    desc: "Fudgy chocolate brownie with roasted almond.",
    price: "From ₹40",
    image: asset("images/brownie-2.jpg"),
    tag: "Customer Favourite"
  },
  {
    name: "Cashew Brownie",
    desc: "Soft chocolate brownie finished with cashew.",
    price: "From ₹40",
    image: asset("images/brownie-3.jpg"),
    tag: "Fresh"
  },
  {
    name: "Assorted Brownies",
    desc: "A delicious mix for sharing and gifting.",
    price: "From ₹250",
    image: asset("images/brownie-5.jpg"),
    tag: "Gift Box"
  }
];

const categories = [
  { title: "Brownies", subtitle: "Rich • Fudgy • Chocolatey", image: asset("images/brownie-1.jpg"), icon: "🍫" },
  { title: "Cookies", subtitle: "Crispy • Chewy • Homemade", image: asset("images/brownie-4.jpg"), icon: "🍪" },
  { title: "Customised Cakes", subtitle: "For your special moments", image: asset("images/brownie-6.jpg"), icon: "🎂" }
];

const reviews = [
  { text: "The brownies were soft, rich and super chocolatey. Loved every bite!", name: "Happy Customer", rating: 5 },
  { text: "Beautifully packed and perfect for gifting. Fresh taste and lovely texture.", name: "Happy Customer", rating: 5 },
  { text: "The homemade feel really comes through. Will definitely order again!", name: "Happy Customer", rating: 5 }
];

function orderLink(product = "") {
  const message = encodeURIComponent(
    `Hi The Cozy Bakery Corner! 🍫 I would like to place an order${product ? ` for ${product}` : ""}.`
  );
  return `https://wa.me/${PHONE}?text=${message}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openOrder = (product = "") => {
    setSelectedProduct(product);
    setOrderOpen(true);
  };

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => goTo("home")} aria-label="Go home">
            <span className="brand-mark"><span>PM</span></span>
            <span className="brand-copy">
              <strong>The Cozy Bakery Corner</strong>
              <small>FRESHLY BAKED <i>•</i> HOMEMADE WITH LOVE</small>
            </span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              ["Home", "home"], ["Our Menu", "menu"], ["About Us", "about"],
              ["Gallery", "gallery"], ["Contact", "contact"]
            ].map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)}>{label}</button>
            ))}
            <button className="nav-order" onClick={() => openOrder()}>
              <ShoppingBag size={16} /> Order Now
            </button>
          </nav>

          <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow"><Sparkles size={15}/> FRESHLY BAKED • HOMEMADE WITH LOVE</span>
              <h1>Sweet moments,<br/><em>made from scratch.</em></h1>
              <p>
                Delicious homemade brownies and treats, baked with care
                for every celebration, craving and little happy moment.
              </p>

              <div className="hero-points">
                <span><Leaf size={18}/> Fresh ingredients</span>
                <span><Heart size={18}/> Made with love</span>
                <span><CakeSlice size={18}/> Perfect for every occasion</span>
              </div>

              <div className="hero-actions">
                <button className="btn btn-gold" onClick={() => openOrder()}>
                  ORDER NOW <ArrowRight size={18}/>
                </button>
                <button className="btn btn-outline" onClick={() => goTo("menu")}>
                  VIEW MENU
                </button>
              </div>

              <div className="mini-note">
                <span className="stars">★★★★★</span>
                <span>Loved by brownie lovers in Katpadi</span>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-frame">
                <img src={asset("images/brownie-3.jpg")} alt="Fresh homemade brownies" />
                <div className="photo-badge"><span>100%</span><small>HOMEMADE</small></div>
                <div className="floating-card">
                  <span className="floating-icon">🍫</span>
                  <div><strong>Rich & Fudgy</strong><small>Freshly baked today</small></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line"><span>SCROLL TO DISCOVER</span><span>↓</span></div>
        </section>

        <section className="intro section-cream">
          <div className="container narrow center">
            <span className="script-label">A little sweetness goes a long way</span>
            <h2>Made with love.<br/><span>Remembered with every bite.</span></h2>
            <p>
              From our kitchen to your table, every treat is prepared in small batches
              with the warmth of homemade baking. Simple ingredients, rich flavour and
              a whole lot of heart.
            </p>
            <div className="ornament"><span></span><Heart size={16} fill="currentColor"/><span></span></div>
          </div>
        </section>

        <section id="menu" className="menu-section section-cream">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark"><Heart size={14} fill="currentColor"/> OUR MENU</span>
              <h2>Choose your <em>favourite</em> treat</h2>
              <p>Freshly baked • Homemade • Delicious</p>
            </div>

            <div className="category-grid">
              {categories.map((cat) => (
                <article className="category-card" key={cat.title}>
                  <div className="category-image">
                    <img src={cat.image} alt={cat.title}/>
                    <span className="category-icon">{cat.icon}</span>
                  </div>
                  <div className="category-body">
                    <h3>{cat.title}</h3>
                    <p>{cat.subtitle}</p>
                    <button onClick={() => cat.title === "Brownies" ? goTo("products") : openOrder(cat.title)}>
                      EXPLORE <ArrowRight size={15}/>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div id="products" className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name}/>
                    <span>{product.tag}</span>
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <div className="product-bottom">
                      <strong>{product.price}</strong>
                      <button onClick={() => openOrder(product.name)}>Order <ArrowRight size={15}/></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="menu-cta">
              <div><span>Need something special?</span><strong>Custom flavours & celebration boxes are available.</strong></div>
              <button className="btn btn-dark" onClick={() => openOrder("Custom Order")}>CUSTOMISE MY ORDER <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="about" className="about section-dark">
          <div className="container about-grid">
            <div className="about-collage">
              <img className="about-main" src= {asset("images/brownie-poster.jpg")} alt="The Cozy Bakery Corner brownies"/>
              <div className="about-stamp"><span>BAKED</span><strong>WITH</strong><span>LOVE</span></div>
            </div>
            <div className="about-copy">
              <span className="eyebrow"><Heart size={14} fill="currentColor"/> OUR STORY</span>
              <h2>A cozy corner for<br/><em>sweet cravings.</em></h2>
              <p>
                The Cozy Bakery Corner is all about bringing homemade goodness
                to your everyday moments. Our brownies are made to be rich,
                soft, fudgy and comforting — the kind of treat you want to share,
                gift or keep all to yourself.
              </p>
              <div className="about-list">
                <div><Check size={17}/><span><strong>Freshly baked</strong><small>Prepared with care for every order.</small></span></div>
                <div><Check size={17}/><span><strong>Quality ingredients</strong><small>Simple ingredients, delicious results.</small></span></div>
                <div><Check size={17}/><span><strong>Made for moments</strong><small>Birthdays, gifts, parties or just because.</small></span></div>
              </div>
              <button className="btn btn-gold" onClick={() => openOrder()}>ORDER YOUR BOX <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-cream">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark"><Sparkles size={14}/> FROM OUR KITCHEN</span>
              <h2>Freshly baked, <em>just for you.</em></h2>
              <p>A peek at the brownies that make every bite special.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item tall"><img src= {asset("images/brownie-1.jpg")} alt="Brownie"/></div>
              <div className="gallery-item"><img src={asset("images/brownie-2.jpg")} alt="Almond brownie"/></div>
              <div className="gallery-item"><img src={asset("images/brownie-4.jpg")} alt="Brownie tray"/></div>
              <div className="gallery-item wide"><img src={asset("images/brownie-5.jpg")} alt="Assorted brownies"/></div>
              <div className="gallery-item"><img src={asset("images/brownie-6.jpg")} alt="Homemade brownie"/></div>
            </div>
          </div>
        </section>

        <section className="reviews section-dark">
          <div className="container">
            <div className="section-heading center light">
              <span className="eyebrow"><Heart size={14} fill="currentColor"/> HAPPY CUSTOMERS</span>
              <h2>Sweet words from<br/><em>our customers.</em></h2>
            </div>
            <div className="review-grid">
              {reviews.map((review, i) => (
                <article className="review-card" key={i}>
                  <div className="review-stars">{Array.from({length: review.rating}).map((_, j) => <Star key={j} size={16} fill="currentColor"/>)}</div>
                  <p>“{review.text}”</p>
                  <span>— {review.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-cream">
          <div className="container contact-box">
            <div>
              <span className="script-label">Ready for something delicious?</span>
              <h2>Let's make your<br/><em>sweet moment.</em></h2>
              <p>Tell us what you're craving and we'll help you choose the perfect treat.</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-gold" href={orderLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={18}/> WHATSAPP US
              </a>
              <a className="contact-link" href={`tel:+${PHONE}`}><Phone size={18}/> {displayPhone}</a>
              <span className="contact-link"><span>⌖</span> Katpadi, Tamil Nadu</span>
              <a className="contact-link" href="#" onClick={(e) => { e.preventDefault(); goTo("gallery"); }}>
                <Instagram size={18}/> Follow our baking journey
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <div className="brand-mark"><span>PM</span></div>
            <div><strong>The Cozy Bakery Corner</strong><small>FRESHLY BAKED • HOMEMADE WITH LOVE</small></div>
          </div>
          <div className="footer-links">
            <button onClick={() => goTo("home")}>Home</button>
            <button onClick={() => goTo("menu")}>Menu</button>
            <button onClick={() => goTo("about")}>About</button>
            <button onClick={() => goTo("gallery")}>Gallery</button>
            <button onClick={() => goTo("contact")}>Contact</button>
          </div>
          <a className="footer-order" href={orderLink()} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowRight size={15}/></a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 The Cozy Bakery Corner. All Rights Reserved.</span>
          <span>Made with <Heart size={13} fill="currentColor"/> for brownie lovers.</span>
        </div>
      </footer>

      {orderOpen && (
        <div className="modal-backdrop" onMouseDown={() => setOrderOpen(false)}>
          <div className="order-modal" onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOrderOpen(false)}><X size={20}/></button>
            <span className="eyebrow dark"><ShoppingBag size={14}/> QUICK ORDER</span>
            <h2>What would you like<br/><em>to order?</em></h2>
            <p>We'll open WhatsApp with your order message ready to send.</p>
            <label>Choose a treat</label>
            <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
              <option value="">Select an item</option>
              {products.map(p => <option key={p.name}>{p.name}</option>)}
              <option>Assorted Gift Box</option>
              <option>Custom Order</option>
              <option>Cookies</option>
              <option>Customised Cake</option>
            </select>
            <a className="btn btn-dark full" href={orderLink(selectedProduct || "a treat")} target="_blank" rel="noreferrer">
              CONTINUE ON WHATSAPP <ArrowRight size={17}/>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
