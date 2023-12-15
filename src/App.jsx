import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import LicenseAndPricing from './pages/LicenseAndPricing';
import { News } from './pages/News';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<News />} />
          <Route path="/licenses-pricing" element={<LicenseAndPricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
