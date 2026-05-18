import ProductCard from '../components/ProductCard';

function Accessories() {
  const accessoryProducts = [
    {
      id: 201,
      title: "Waterproof Sports Duffle Bag",
      price: "Rs. 3,500",
      image: "/asseccories.jpg",
      category: "BAGS"
    },
    {
      id: 202,
      title: "Insulated Stainless Gym Bottle",
      price: "Rs. 1,800",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 203,
      title: "Sweat-Wicking Headband (Pack of 3)",
      price: "Rs. 950",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=500",
      category: "ACCESSORIES"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/asseccories.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>ACCESSORIES</h1>
        <p style={{ color: '#ccc' }}>ESSENTIAL TRAINING GEAR & EQUIPMENT</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">SHOP ESSENTIALS</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {accessoryProducts.map(product => (
            <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} category={product.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accessories;