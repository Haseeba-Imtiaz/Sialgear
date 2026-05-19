import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); // URL se ID le raha hai

  // Dummy data for testing
  const product = {
    id: 301,
    title: "Match Play Pro Football",
    price: "£15",
    images: [
      "/football1.jpg", 
      "/football2.jpg", 
      "/football3.jpg"  
    ],
    category: "FOOTBALL",
    description: "Premium quality Match Play Pro Football designed for professional tournaments. Features high durability, excellent air retention, and perfect aerodynamic flight control. Perfect for all weather conditions."
  };

  // State to handle main image switching
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div style={{ maxWidth: '1200px', margin: '160px auto 60px auto', padding: '0 20px', color: 'white' }}>
      
      {/* Wapas jaane ka button (Is se Link ka error khatam ho jayega) */}
      <Link to="/football" style={{ color: '#aaa', textDecoration: 'none', display: 'inline-block', marginBottom: '20px', fontWeight: 'bold' }}>
        ← BACK TO FOOTBALL
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        
        {/* LEFT SIDE: IMAGES SECTION */}
        <div>
          {/* Big Main Image */}
          <div style={{ width: '100%', height: '400px', backgroundColor: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={mainImage} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

          {/* Small Thumbnails (3 Pics) */}
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px', justifyContent: 'center' }}>
            {product.images.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setMainImage(img)}
                style={{ width: '80px', height: '80px', backgroundColor: '#1a1a1a', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', border: mainImage === img ? '2px solid white' : '1px solid #333' }}
              >
                <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: DETAILS SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            {product.category} (Product ID: {id || product.id}) {/* Is se id ka error khatam ho jayega */}
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '15px' }}>{product.title}</h1>
          <h2 style={{ color: '#55ff55', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>{product.price}</h2>
          
          <div style={{ borderTop: '1px solid #333', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#ccc' }}>Product Description:</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6', fontSize: '1.05rem' }}>{product.description}</p>
          </div>

          <button style={{ marginTop: '30px', padding: '15px', backgroundColor: 'white', color: 'black', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px', cursor: 'pointer', width: '100%', maxWidth: '300px' }}>
            ADD TO CART
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;