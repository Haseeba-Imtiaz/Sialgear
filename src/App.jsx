import { Routes, Route } from 'react-router-dom';
import './App.css';

// Sub components aur pages ko sahi paths ke sath import kiya hai
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/accessories';

import Jackets from './pages/Jackets';
import Gloves from './pages/Gloves';
import Football from './pages/Football';
import Hockey from './pages/Hockey';
import Fitness from './pages/Fitness';
import Running from './pages/Running';

function App() {
  return (
    <div className="main-layout">
      {/* Navbar sab pages par upar show hoga */}
      <Navbar />

      {/* Pages badalne ke raste */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/fitness" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>FITNESS GEAR</h2><p>Coming Soon...</p></div>} />
        <Route path="/sports-brand" element={<div style={{ color: 'white', padding: '100px', textAlign: 'center' }}><h2>SPORTS BRAND</h2><p>Coming Soon...</p></div>} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/gloves" element={<Gloves />} />
        <Route path="/football" element={<Football />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/running" element={<Running />} />
      </Routes>

      {/* Footer sab pages par neeche show hoga */}
      <Footer />
    </div>
  );
}

export default App;