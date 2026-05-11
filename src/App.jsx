import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import './App.css'; 

function App(){
  return (
    <div className="main-layout">
      <div className="top-bar">
        FREE SHIPPING ON ORDERS ABOVE RS. 20,000
      </div>

      <nav className="navbar">
        <div className="nav-container-full">
          <div className="left-side-nav">
            <div className="logo-area">
              <img src="/logo(1).png" alt="SIALGEAR" className="main-logo" />
            </div>
            <ul className="nav-links">
              <li>MEN</li>
              <li>WOMEN</li>
              <li>ACCESSORIES</li>
              <li>FITNESS</li>
              <li>SPORTS BRAND</li>
            </ul>
          </div>
          <div className="nav-actions">
            <div className="icon-group">
              <FiSearch className="nav-icon-react" />
              <FiUser className="nav-icon-react" />
              <div className="cart-wrapper">
                <FiShoppingCart className="nav-icon-react" />
                <span className="cart-count">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="hero-banner">
        <div className="hero-content">
          <p>PREMIUM MANUFACTURING HOUSE</p>
          <h1>ELE 
      VATE YOUR <span>GEAR</span></h1>
          <button className="explore-btn">EXPLORE CATALOGUE</button>
        </div>
      </header>
      <section className="shop-by-sport">
         <div className="section-title-container">
  <h2 className="boxed-title">SHOP BY INTEREST</h2>
</div>
        <div className="sport-grid-container">
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=600" alt="Jackets" />
            </div>
            <p>JACKETS & APPAREL</p>
          </div>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="/gloves.jpg" alt="Gloves" />
            </div>
            <p>GLOVES</p>
          </div>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="/footbal.jpg" alt="Football" />
            </div>
            <p>FOOTBALL</p>
          </div>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="/hockey.jpg" alt="hockey" />
            </div>
            <p>HOCKEY</p>
          </div>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="/fitness.jpg" alt="fitness" />
            </div>
            <p>GYM & FITNESS</p>
          </div>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="/running.jpg" alt="Socks" />
            </div>
            <p>RUNNING GEAR</p>
          </div>
        </div>
      </section>
<section className="shop-category-new">
  <div className="section-title-container">
  <h2 className="boxed-title">SHOP BY CATEGORY</h2>
</div>
  <div className="category-grid-container">
    
    {/* Left Side - Bari Picture (MEN) */}
    <div className="category-card large-card">
      <img src="/men.jpg" alt="Men Category" />
      <div className="category-info">
        <h3>MEN</h3>
        <p>CLOTHING | SHOES</p>
      </div>
    </div>

    {/* Right Side - Do Choti Pictures */}
    <div className="right-column">
      
      {/* Top Right (WOMEN) */}
      <div className="category-card small-card">
        <img src="/women.png" alt="Women Category" />
        <div className="category-info">
          <h3>WOMEN</h3>
          <p>CLOTHING | SHOES</p>
        </div>
      </div>

      {/* Bottom Right (ACCESSORIES) */}
      <div className="category-card small-card">
        <img src="/asseccories.jpg" alt="Accessories" />
        <div className="category-info">
          <h3>ACCESSORIES</h3>
          <p>BAGS | BOTTLES | OTHERS</p>
        </div>
      </div>

    </div>
  </div>
  
</section>
      <footer className="apollo-footer">
        <div className="footer-main-content">
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li>Payment Methods</li>
              <li>Return & Exchange</li>
              <li>Shipping & Delivery</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About SIALGEAR</h3>
            <ul>
              <li>Who We Are</li>
              <li>Jobs & Careers</li>
              <li>Become Our Supplier</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Reviews</li>
              <li>Size Chart</li>
              <li>Fabric Technology</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column contact-col">
            <h3>Contact</h3>
            <p>Call Us MON - SAT (9AM-6PM)</p>
            <p className="contact-number">+44 7881273773</p>
            <p>info@sialgear.pk</p>
            <div className="social-links-footer">
              <span>f</span> <span>x</span> <span>ig</span> <span>in</span> <span>yt</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span>Privacy Policy</span> | <span>Terms & Conditions</span> | <span>Site Map</span>
          </div>
          <div className="bottom-right">
            SIALGEAR Pakistan ©️ 2026 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;