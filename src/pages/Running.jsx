import ProductCard from '../components/ProductCard';

function Running() {
  const products = [
    {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    },
     {
      id: 901,
      title: "UltraLight Cushion Running Shoes",
      price: "Rs. 4,900",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      category: "SHOES"
    },
    {
      id: 902,
      title: "Smart Fitness Tracker Band",
      price: "Rs. 3,200",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500",
      category: "ELECTRONICS"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>RUNNING GEAR</h1>
        <p style={{ color: '#ccc' }}>SPEED, COMFORT & PERFORMANCE</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">RUNNING ESSENTIALS</h2>
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

export default Running;