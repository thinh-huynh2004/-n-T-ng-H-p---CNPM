import LoginInterface from './NguoiDung/login.jsx';
import LeftNavbar from './NguoiDung/leftNav.jsx';
import TopNavbar from './NguoiDung/topNav.jsx';
import HomepageUser from './NguoiDung/homepage.jsx';
import RegistBorrowBook from './NguoiDung/regist.jsx';
import HistoryBookBorrow from './NguoiDung/history.jsx';
import BorrowBook from './NguoiDung/borrow.jsx';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import InfoUser from './NguoiDung/info.jsx';

function Layout() {
  const location = useLocation();

  // Các route cần ẩn Navbar
  const hideNavbarRoutes = ["/login", "/logout"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <LoginInterface/>
      {shouldShowNavbar && <LeftNavbar />}
      {shouldShowNavbar && <TopNavbar />}
      {shouldShowNavbar && <HomepageUser />}
      <Routes>
        <Route path="/login" element={<LoginInterface />} />
        <Route path="/homepage" element={<HomepageUser />} />
        <Route path="/regist" element={<RegistBorrowBook />} />
        <Route path="/history" element={<HistoryBookBorrow />} />
        <Route path="/borrow" element={<BorrowBook />} />
        <Route path="/information" element={<InfoUser />} />
        <Route path="/logout" element={<LoginInterface />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
