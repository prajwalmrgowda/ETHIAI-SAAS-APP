// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Assessment from "./pages/Assessment";
import Disclaimer from "./pages/Disclaimer";
import Evaluation from "./pages/Evaluation";
import Sidebar from "./components/Sidebar";
import ThankYou from "./pages/ThankYou";
import UserDetailsForm from "./pages/UserDetailsForm";
import DownloadReport from "./pages/DownloadReport";

const Layout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Only show sidebar on /evaluation
  const showSidebar = location.pathname === "/evaluation";

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-[#0a0e1a] text-white min-h-screen">
      {showSidebar && <Sidebar />}
      <div
        className={`flex-1 transition-all duration-300 ${
          showSidebar ? (sidebarOpen ? "ml-64" : "ml-16") : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/UserDetailsForm" />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/UserDetailsForm" element={<UserDetailsForm />} />
          <Route path="/DownloadReport" element={<DownloadReport/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;