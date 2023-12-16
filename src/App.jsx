import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LicenseAndPricing from './pages/LicenseAndPricing';
import News from './pages/News';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import InfoHub from './pages/dashboard/InfoHub';
import ListCourses from './pages/dashboard/ListCourses';
import Profile from './pages/dashboard/Profile';
import Quizz from './pages/dashboard/Quizz';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/licenses-pricing" element={<LicenseAndPricing />} />
          {/* Authenticated */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/info-hub" element={<InfoHub />} />
          <Route path="/play" element={<Quizz />} />
          <Route path="/:level" element={<ListCourses />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
