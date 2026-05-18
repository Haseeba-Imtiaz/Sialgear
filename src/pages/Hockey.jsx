import ProductCard from '../components/ProductCard';

function Hockey() {
  const products = [
    {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    },
     {
      id: 701,
      title: "Composite Composite Hockey Stick",
      price: "Rs. 5,800",
      image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500",
      category: "STICKS"
    },
    {
      id: 702,
      title: "Turf Pro Hockey Shoes",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=500",
      category: "SHOES"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1580748141549-71748d60bdc9?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>HOCKEY COLLECTION</h1>
        <p style={{ color: '#ccc' }}>FIELD HOCKEY GEAR & ACCESSORIES</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">HOCKEY GEAR</h2>
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

export default Hockey;