import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { SidebarItems } from '../data/sidebar-data';
// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <main className="relative">
      <Navbar background={'bg-transparent'} />
      <Sidebar user={null} SidebarItems={SidebarItems} />
      {children}

      <Footer />
    </main>
  );
};

export default MainLayout;
