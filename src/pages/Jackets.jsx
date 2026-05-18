import ProductCard from '../components/ProductCard';

function Jackets() {
  const products = [
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    },
    {
      id: 401,
      title: "Alpha Waterproof Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 402,
      title: "Thermal Fleece Training Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500",
      category: "APPAREL"
    }
    
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>JACKETS & APPAREL</h1>
        <p style={{ color: '#ccc' }}>STYLISH & WEATHER-RESISTANT GEAR</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">SHOP JACKETS</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map(product => (
            <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} category={product.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jackets;