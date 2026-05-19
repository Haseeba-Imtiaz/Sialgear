import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Football() {
  const products = [
    {
      id: 601,
      title: "Match Play Football",
      price: "£15",
      images: [
        "/football1.jpg",
        "/football2.jpg",
        "/football3.jpg",
      ],
      category: "FOOTBALL",
      description: "Premium quality Match Play Pro Football designed for professional tournaments. Features high durability, excellent air retention, and perfect aerodynamic flight control. Perfect for all weather conditions."
    },

    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "£12",
      images: [
        "/images/football-main.jpg",
        "/images/football-side.jpg",
        "/images/football-box.jpg"
      ],
      category: "FOOTBALL",
      description: "Premium quality Match Play Pro Football designed for professional tournaments. Features high durability, excellent air retention, and perfect aerodynamic flight control. Perfect for all weather conditions."
    },

    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    },
    {
      id: 601,
      title: "Match Play Pro Football",
      price: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500",
      category: "FOOTBALL"
    },
    {
      id: 602,
      title: "Carbon Fiber Shin Guards",
      price: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500",
      category: "GEAR"
    }
  ];

  return (
    <div className="category-page" style={{ paddingBottom: '60px' }}>
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500')",
        backgroundSize: 'cover', backgroundPosition: 'center', height: '250px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>FOOTBALL</h1>
        <p style={{ color: '#ccc' }}>CHAMPIONSHIP GEAR & ACCESSORIES</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">FOOTBALL EQUIPMENT</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <Link
              to="/product/301"
              key={product.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProductCard title={product.title} price={product.price} image={product.image} />
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Football;