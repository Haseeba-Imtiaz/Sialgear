import { Link } from "react-router-dom";

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
        <Link to="/jackets" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="sport-card">
            <div className="sport-img-box">
              <img src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=600" alt="Jackets" />
            </div>
            <p>JACKETS & APPAREL</p>
          </div>
          </Link>


          <div className="sport-card">
            <Link to="/gloves" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sport-img-box">
              <img src="/gloves.jpg" alt="Gloves" />
            </div>
            <p>GLOVES</p>
            </Link>
          </div>
        

          <div className="sport-card">
            <Link to="/football" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sport-img-box">
              <img src="/footbal.jpg" alt="Football" />
            </div>
            <p>FOOTBALL</p>
            </Link>
          </div>


          <div className="sport-card">
            <Link to="/hockey" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sport-img-box">
              <img src="/hockey.jpg" alt="hockey" />
            </div>
            <p>HOCKEY</p>
            </Link>
          </div>


          <div className="sport-card">
            <Link to="/Fitness" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sport-img-box">
              <img src="/fitness.jpg" alt="Fitness" />
            </div>
            <p>GYM & FITNESS</p>
            </Link>
          </div>

          <div className="sport-card">
            <Link to="/running" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="sport-img-box">
              <img src="/running.jpg" alt="Socks" />
            </div>
            <p>RUNNING GEAR</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="shop-category-new">
        <div className="section-title-container">
          <h2 className="boxed-title">SHOP BY CATEGORY</h2>
        </div>
         <div className="category-grid-container">
        <Link to="/men" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          {/* Left Side - Bari Picture (MEN) */}
          <div className="category-card large-card">
            <img src="/men.jpg" alt="Men Category" />
            <div className="category-info">
              <h3>MEN</h3>
              <p>CLOTHING | SHOES</p>
            </div>
      </div>
          </Link>
          <div className="right-column">
          <Link to="/women" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            {/* Top Right (WOMEN) */}
            <div className="category-card small-card">
              <img src="/women.png" alt="Women Category" />
              <div className="category-info">
                <h3>WOMEN</h3>
                <p>CLOTHING | SHOES</p>
              </div>
            </div>
            </Link>

            <Link to="/accessories" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="category-card small-card">
              <img src="/asseccories.jpg" alt="Accessories" />
              <div className="category-info">
                <h3>ACCESSORIES</h3>
                <p>BAGS | BOTTLES | OTHERS</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Home;