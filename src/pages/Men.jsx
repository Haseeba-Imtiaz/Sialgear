import ProductCard from '../components/ProductCard';

function Men() {
  // Men's products ka dummy data (Baad mein ye backend/database se ayega)
  const menProducts = [
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    },
    {
      id: 1,
      title: "Pro Performance Windbreaker",
      price: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=500",
      category: "JACKETS"
    },
    {
      id: 2,
      title: "Elite Training Gym Hoodie",
      price: "Rs. 3,800",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      category: "HOODIES"
    },
    {
      id: 3,
      title: "Stealth Leather Gym Gloves",
      price: "Rs. 2,200",
      image: "/gloves.jpg", // Jo aapke public folder mein hai
      category: "GLOVES"
    },
    {
      id: 4,
      title: "Alpha Tech Track Fleece",
      price: "Rs. 4,200",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
      category: "ACTIVEWEAR"
    }
  ];

  return (
    <div className="men-page-container" style={{ paddingBottom: '60px' }}>
      
      {/* Men's Category Banner */}
      <div className="category-banner" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/men.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', margin: '0' }}>MEN'S COLLECTION</h1>
        <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '10px' }}>PREMIUM ATHLETIC & SPORTS WEAR</p>
      </div>

      {/* Products Grid Section */}
      <div className="products-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-title-container" style={{ marginBottom: '30px' }}>
          <h2 className="boxed-title">NEW ARRIVALS</h2>
        </div>

        {/* Dynamic Cards Render ho rahi hain */}
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {menProducts.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Men;