import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { TraineeSidebarItems } from '../data/sidebar-data';

// eslint-disable-next-line react/prop-types
export const DashboardLayout = ({ children }) => {
  const user = {
    name: 'Vinh Nguyen',
  };

  return (
    <main className="relative">
      <Navbar background={'bg-neutral-900'} />
      <Sidebar user={user} SidebarItems={TraineeSidebarItems} />
      {children}
    </main>
  );
};