import { Routes, Route, Outlet, Link } from "react-router-dom";

import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
