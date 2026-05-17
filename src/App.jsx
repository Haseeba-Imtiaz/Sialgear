import { Routes, Route } from 'react-router-dom';
import './App.css';

// Sub components aur pages ko yahan import kiya hai
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="main-layout">
      {/* Navbar sab pages par upar show hoga */}
      <Navbar />

      {/* Pages badalne ke raste */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Naye Pages jo aap baad mein banayengi, abhi ke liye Coming Soon dummy text lagaya hai */}
        <Route path="/men" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>MEN'S COLLECTION</h2><p>Coming Soon...</p></div>} />
        <Route path="/women" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>WOMEN'S COLLECTION</h2><p>Coming Soon...</p></div>} />
        <Route path="/accessories" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>ACCESSORIES</h2><p>Coming Soon...</p></div>} />
        <Route path="/fitness" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>FITNESS GEAR</h2><p>Coming Soon...</p></div>} />
        <Route path="/sports-brand" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>SPORTS BRAND</h2><p>Coming Soon...</p></div>} />
      </Routes>

      {/* Footer sab pages par neeche show hoga */}
      <Footer />
    </div>
  );
}

export default App;