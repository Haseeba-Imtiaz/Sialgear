import ProductCard from '../components/ProductCard';

function Gloves() {
  const products = [
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    },
    {
      id: 501,
      title: "Leather Weightlifting Gloves",
      price: "Rs. 1,450",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500",
      category: "GYM GEAR"
    },
    {
      id: 502,
      title: "Pro Striker Boxing Gloves",
      price: "Rs. 2,900",
      image: "https://images.unsplash.com/photo-1517438322307-e6732813c596?q=80&w=500",
      category: "COMBAT"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>GLOVES COLLECTION</h1>
        <p style={{ color: '#ccc' }}>MAXIMUM GRIP & PROTECTION</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">AVAILABLE GLOVES</h2>
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

export default Gloves;