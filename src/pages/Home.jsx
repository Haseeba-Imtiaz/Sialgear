function Home() {
  return (
    <>
      <header className="hero-banner">
        <div className="hero-content">
          <p>PREMIUM MANUFACTURING HOUSE</p>
          <h1>ELEVATE YOUR <span>GEAR</span></h1>
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
    </>
  );
}

export default Home;