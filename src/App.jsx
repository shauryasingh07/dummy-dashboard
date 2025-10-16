import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Leads from "./components/Leads.jsx";
import LeadDetailModal from "./components/modals/LeadDetailModal.jsx";
import Payments from "./components/Payments.jsx";
import PartnerManagement from "./components/PartnerManagement.jsx";
import Service from "./components/Service.jsx";
import Setting from "./components/Setting.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="w-dvw h-screen flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/leads/:leadId" element={<LeadDetailModal />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/partner-mgmt" element={<PartnerManagement />} />
            <Route path="/service-support" element={<Service />} />
            <Route path="/payments" element={<Setting />} />

            {/* Add your other pages */}
          </Routes>
        </div>
      </Router>{" "}
    </>
  );
}

export default App;
