import LoginInterface from './DangNhap/login.jsx';
import LeftNavbar from './NguoiDung/DieuHuong/DieuHuongTrai/leftNav.jsx';
import TopNavbar from './NguoiDung/DieuHuong/DieuHuongTren/topNav.jsx';
import HomepageUser from './NguoiDung/TrangChuNguoiDung/homepage.jsx';
import RegistBorrowBook from './NguoiDung/DangKyMuon/regist.jsx';
import HistoryBookBorrow from './NguoiDung/LichSuMuonSach/history.jsx';
import BorrowBook from './NguoiDung/MuonSach/borrow.jsx';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import InfoUser from './NguoiDung/ThongTinCaNhan/info.jsx';

//Nhan vien
import Header from './NhanVien/components/Header.jsx';
import HomePage from './NhanVien/components/HomePage.jsx';
import ManageDocs from './NhanVien/components/ManageDocs.jsx';
import DocsDetail from './NhanVien/components/DocsDetail.jsx';
import AddDocument from './NhanVien/components/AddDocument.jsx';
import BorrowRegister from './NhanVien/components/BorrowRegister.jsx';
import RequestExtension from './NhanVien/components/RequestExtension.jsx';
import BookReturnConfirm from './NhanVien/components/BookReturnConfirm.jsx';
import OverdueNotice from './NhanVien/components/OverdueNotice.jsx';
import PersonalInfo from './NhanVien/components/PersonalInfo.jsx';

function User() {
  const location = useLocation();

  // Các route cần ẩn Navbar
  const hideNavbarRoutes = ["/login", "/logout"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* <LoginInterface/> */}
      <Routes>
        <Route path="/login" element={<><LoginInterface /></>} />
      </Routes>
      {shouldShowNavbar && <LeftNavbar />}
      {shouldShowNavbar && <TopNavbar />}
      {shouldShowNavbar && <HomepageUser />}
      <Routes>
        
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

function Employee() {
  return(
    <>
      <Header /> {/* Header luôn hiển thị trên mọi trang */}
      <Routes>
        {/* Định nghĩa đường dẫn gốc hiển thị trang chủ */}
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-docs" element={<ManageDocs />} />
        <Route path="/docs-detail" element={<DocsDetail />} />
        <Route path="/add-document" element={<AddDocument />} />


        <Route path="/borrow-register" element={<BorrowRegister />} />
        <Route path="/request-extension" element={<RequestExtension />} />
        <Route path="/book-return" element={<BookReturnConfirm />} />
        <Route path="/overdue-notice" element={<OverdueNotice />} />

        <Route path="/personal-info" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <User /> 
      {/* Thay doi bang User hoac Employee */}
    </Router>
  );
}

export default App;
