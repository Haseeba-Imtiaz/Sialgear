function Footer() {
  return (
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
  );
}

export default Footer;