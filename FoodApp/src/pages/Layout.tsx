import Navbar from "../Components.tsx/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components.tsx/footer";
const Layout = ({cartCount}: {cartCount:number}) => <div className="Layout"><Navbar cartCount={cartCount}/><main className="main"><Outlet/></main><Footer/></div>;
export default Layout;