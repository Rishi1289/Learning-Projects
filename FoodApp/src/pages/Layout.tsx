
import Navbar from '../Components.tsx/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components.tsx/footer';

const Layout = () => {
  return (
    <div className="Layout">
    <Navbar/>
    <main className="main">
    <Outlet/>
    </main>
    
    <Footer/>
    </div>
  )
}

export default Layout
