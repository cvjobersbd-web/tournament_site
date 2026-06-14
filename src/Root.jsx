import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  const location = useLocation();
  
  // পাথ চেক করুন যেখানে Navbar এবং Footer দেখাবে না
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/signup';
  
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      <main className={!hideNavbarFooter ? "flex-1" : ""}>
        <Outlet />
      </main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default Root;