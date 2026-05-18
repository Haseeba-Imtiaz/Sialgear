import ProductCard from '../components/ProductCard';

function Women() {
  const womenProducts = [
    {
      id: 101,
      title: "AeroDry Training Leggings",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=500",
      category: "FITNESS WEAR"
    },
    {
      id: 102,
      title: "Impact Sports Crop Top",
      price: "Rs. 1,950",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 103,
      title: "Pro-Fit Running Jacket",
      price: "Rs. 4,800",
      image: "/women.png", // Aapka local image path
      category: "JACKETS"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/women.png')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>WOMEN'S COLLECTION</h1>
        <p style={{ color: '#ccc' }}>PREMIUM WORKOUT & ATHLETIC APPAREL</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">LATEST ARRIVALS</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {womenProducts.map(product => (
            <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} category={product.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;