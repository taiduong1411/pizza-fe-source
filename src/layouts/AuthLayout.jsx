import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { SidebarItems } from '../data/sidebar-data';

// eslint-disable-next-line react/prop-types
export default function AuthLayout({ children, bgColor }) {
  return (
    <main className={'relative ' + bgColor}>
      <Navbar background={'bg-transparent'} />
      <Sidebar SidebarItems={SidebarItems} />
      {children}
      <Footer />
    </main>
  );
}