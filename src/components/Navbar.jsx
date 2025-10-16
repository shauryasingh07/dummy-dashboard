import React from "react";
import "../index.css";
import brandLogo from "../assets/dashboard-img/brand-logo.png";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiHandshake } from "react-icons/pi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FiFileText } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const mainLinks = [{ text: "Dashboard", icon: <RxDashboard />, to: "/" }];

const preOnboardingLinks = [
  { text: "Leads", icon: <HiOutlineUserGroup />, to: "/leads" },
];

const partnerLifecycleLinks = [
  { text: "Partner Mgmt", icon: <PiHandshake />, to: "/partner-mgmt" },
  { text: "Payments", icon: <LiaRupeeSignSolid />, to: "/payments" },
  { text: "Service & Support", icon: <FiFileText />, to: "/service-support" },
  { text: "Settings", icon: <IoSettingsOutline />, to: "/settings" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <aside className="navbar-section flex flex-col w-full items-center py-3 fixed z-50 bg-white">
      <nav>
        <div>
          <img src={brandLogo} alt="" className="w-45 h-5.5 mb-6 px-4" />
        </div>
        <ul className="navbar-nav w-full flex flex-col">
          {/* Main Links */}
          {mainLinks.map((link) => (
            <li className="nav-item">
              <Link
                to={link.to}
                className={
                  "nav-link flex w-full items-center gap-4 rounded-lg px-2 py-1 transition-all" +
                  (location.pathname === link.to
                    ? " bg-green-100 text-green-700" // active styling
                    : "hover:bg-green-50 text-gray-700")
                }
              >
                <span className="text-lg">{link.icon}</span>
                <h2 className="">{link.text}</h2>
              </Link>
            </li>
          ))}

          {/* Pre-Onboarding Section */}
          <li className="mt-4">
            <h3 className="text-gray-400 mb-2">PRE ONBOARDING</h3>
          </li>
          {preOnboardingLinks.map((link) => (
            <li className="nav-item">
              <Link
                className={
                  "nav-link flex w-full items-center gap-4 rounded-lg px-2 py-1 transition-all" +
                  (location.pathname === link.to
                    ? " bg-green-100 text-green-700" // active styling
                    : "hover:bg-green-50 text-gray-700")
                }
                to={link.to}
              >
                <span className="text-lg">{link.icon}</span>
                <h2>{link.text}</h2>
              </Link>
            </li>
          ))}

          {/* Partner Lifecycle Section */}
          <li className="mt-4">
            <h3 className="text-gray-400 mb-2">PARTNER LIFECYCLE</h3>
          </li>
          {partnerLifecycleLinks.map((link) => (
            <li className="nav-item mb-3">
              <Link
                className={
                  "nav-link flex w-full items-center gap-4 rounded-lg px-2 py-1 transition-all" +
                  (location.pathname === link.to
                    ? " bg-green-100 text-green-700" // active styling
                    : "hover:bg-green-50 text-gray-700")
                }
                to={link.to}
              >
                <span className="text-lg">{link.icon}</span>
                <h2>{link.text}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
