import Footer from '../components/footer';
import Navbar from '../components/navbar';

// eslint-disable-next-line react/prop-types
export default function AuthLayout({ children, bgColor }) {
  return (
    <main className={'relative ' + bgColor}>
      <Navbar background={'bg-transparent'} />

      {children}

      <Footer />
    </main>
  );
}
