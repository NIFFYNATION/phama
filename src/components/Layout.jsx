import React from 'react';
import { Outlet } from 'react-router-dom';
import PagesNav from './PagesNav';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <PagesNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;