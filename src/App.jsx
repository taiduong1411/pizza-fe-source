import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import LicenseAndPricing from './pages/LicenseAndPricing';
import { News } from './pages/News';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/licenses-pricing" element={<LicenseAndPricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
