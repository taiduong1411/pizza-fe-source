import Footer from '../components/footer';
import Navbar from '../components/navbar';

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <main className="relative">
      <Navbar background={'bg-transparent'} />

      {children}

      <Footer />
    </main>
  );
};

export default MainLayout;
