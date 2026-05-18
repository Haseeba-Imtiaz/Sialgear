import ProductCard from '../components/ProductCard';

function Fitness() {
  const products = [
    {
      id: 801,
      title: "Adjustable Dumbbell Set (20kg)",
      price: "Rs. 7,500",
      image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=500",
      category: "WEIGHTS"
    },
    {
      id: 802,
      title: "Premium Anti-Slip Yoga Mat",
      price: "Rs. 1,950",
      image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=500",
      category: "ACCESSORIES"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>GYM & FITNESS</h1>
        <p style={{ color: '#ccc' }}>WORKOUT FROM HOME OR GYM</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">FITNESS GEAR</h2>
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

export default Fitness;