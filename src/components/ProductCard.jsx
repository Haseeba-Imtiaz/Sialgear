function ProductCard({ title, price, image, category }) {
  return (
    <div className="product-card" style={{
      background: '#111', // Agar dark theme hai, warna aap change kar sakti hain
      border: '1px solid #222',
      borderRadius: '8px',
      overflow: 'hidden',
      color: 'white',
      transition: 'transform 0.3s'
    }}>
      <div className="product-img-box" style={{ height: '300px', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="product-info" style={{ padding: '15px' }}>
        <span style={{ fontSize: '0.8rem', color: '#888', letterSpacing: '1px' }}>{category}</span>
        <h4 style={{ margin: '5px 0 10px 0', fontSize: '1.1rem', fontWeight: '500' }}>{title}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: '#fff' }}>{price}</span>
          <button className="add-to-cart-btn" style={{
            background: 'white',
            color: 'black',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;