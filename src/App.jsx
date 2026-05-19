import { Routes, Route } from 'react-router-dom';
import './App.css';

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
import ProductDetails from './pages/ProductDetails';

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
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/gloves" element={<Gloves />} />
        <Route path="/football" element={<Football />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/running" element={<Running />} />
        <Route path="/product/301" element={<ProductDetails />} />
      </Routes>

      {/* Footer sab pages par neeche show hoga */}
      <Footer />
    </div>
  );
}

export default App;