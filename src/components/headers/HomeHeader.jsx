import React, {useState} from "react";
import "../../index.css";
import { GoBell } from "react-icons/go";
import mainProfile from "../../assets/dashboard-img/profile1.jpg";
import CreateLeadModal from "../modals/CreateLeadModal"

const HomeHeader = () => {

    const [showCreateLeadModal, setShowCreateLeadModal] = useState(false);
  
    const handleCreateLeadClick = () => {
      setShowCreateLeadModal(true);
    };
  
    const handleCloseModal = () => {
      setShowCreateLeadModal(false);
    };

 return (
  
  // Dashboard's header
    <div className="dashboard-header header w-full h-13 flex justify-between items-center px-5 py-2 bg-white fixed z-50 border-b border-gray-200 overflow-y-hidden">
      <h1 className="font-semibold">Dashboard</h1>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3 mr-4">
          <button className="uploadLead bg-green-700 text-white px-5 py-1 text-sm">Upload Lead</button>
          <button className="assignLead bg-green-700 text-white px-5 py-1 text-sm">Assign Lead</button>
          <button className="createLead bg-green-700 text-white px-4 py-1 text-sm" onClick={handleCreateLeadClick}>
            <span className="mr-1">+</span> Create Lead
          </button>
        </div>

        <GoBell className="text-2xl text-gray-400 object-contain" />

        <div className="h-6 border-l border-gray-300 mx-2"></div>

        <div className="flex items-center gap-4 mx-3">
          <div>
            <h2 className="text-sm">Surya Devi Reddy</h2>
            <h4 className="text-gray-300 text-xs">Admin</h4>
          </div>
          <img src={mainProfile} alt="profile" className="w-9 h-9 rounded-full" />
        </div>
      </div>
            {showCreateLeadModal && <CreateLeadModal onClose={handleCloseModal} />}

    </div>
  );
};

export default HomeHeader;
