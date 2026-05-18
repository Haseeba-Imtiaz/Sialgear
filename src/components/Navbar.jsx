import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  return (
    <>
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
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>HOME</Link></li>
              <li><Link to="/men" style={{ color: 'inherit', textDecoration: 'none' }}>MEN</Link></li>
              <li><Link to="/women" style={{ color: 'inherit', textDecoration: 'none' }}>WOMEN</Link></li>
              <li><Link to="/accessories" style={{ color: 'inherit', textDecoration: 'none' }}>ACCESSORIES</Link></li>
              <li><Link to="/fitness" style={{ color: 'inherit', textDecoration: 'none' }}>FITNESS</Link></li>
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
    </>
  );
}

export default Navbar;