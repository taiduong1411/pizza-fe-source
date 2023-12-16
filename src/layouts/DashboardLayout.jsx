import Navbar from '../components/navbar';

// eslint-disable-next-line react/prop-types
export const DashboardLayout = ({ children }) => {
  return (
    <main className="relative">
      <Navbar background={'bg-neutral-900'} />
      {children}
    </main>
  );
};
