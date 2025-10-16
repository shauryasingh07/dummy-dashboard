import { FiX } from "react-icons/fi";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import "../../index.css";

const leadTypes = [
  { label: "DRIVER" },
  { label: "DEALER" },
  { label: "NBFC" },
  { label: "OEM" },
  { label: "INFLUENCER" },
];

// form components for creating lead
function DriverForm() {
  return (
    <form className="w-full h-full scrollbar-hide overflow-y-auto py-6">
      <div className="w-full flex justify-between gap-4 mb-8">
        <div className="text-gray-800 w-1/2">
          <label className="block">Referred By</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm">
            <option className="">Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/2">
          <label className="block">Product Interested In</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm">
            <option>Select</option>
          </select>
        </div>
      </div>

      <h3 className="text-green-600">PERSONAL INFORMATION</h3>
      <div className="perInfo w-full mb-8">
        <div className="w-full flex justify-between gap-4 mb-3">
          <div className="text-gray-800 w-1/2 mt-2">
            <label className="block">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/2 mt-2">
            <label className="block">Second Name</label>
            <input
              type="text"
              placeholder="Enter Second Name"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-4">
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Contact Number</label>
            <input
              type="tel"
              placeholder="+91"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Date of Birth</label>
            <input
              type="date"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Gender</label>
            <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
              <option>Select</option>
            </select>
          </div>
        </div>
      </div>

      <h3 className="text-green-600">INTERESTED AREA OF WORK</h3>
      <div className="w-full flex justify-between gap-4 mb-3">
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">City</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">State</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">Cluster</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 mb-12">
        <div className="text-gray-800 w-1/2 mt-2">
          <label className="block">Business Segment</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/2 mt-2">
          <label className="block">Lead Stage</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
      </div>

      <button className="btn bg-green-500 text-white px-5 py-2 rounded">
        Save
      </button>
      <button className="btn bg-gray-300 text-black px-5 py-2 rounded ml-3">
        Cancel
      </button>
    </form>
  );
}

function DealerForm() {
  return (
    <form className="w-full h-full scrollbar-hide overflow-y-auto py-6">
      <div className="w-full flex justify-between gap-4 mb-8">
        <div className="text-gray-800 w-1/3">
          <label className="block">Referred By</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm">
            <option className="">Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/3">
          <label className="block">Product Interested In</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm">
            <option>Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/3">
          <label className="block">Profile Type</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm">
            <option>Select</option>
          </select>
        </div>
      </div>

      <h3 className="text-green-600">PERSONAL INFORMATION</h3>
      <div className="personalInfo w-full mb-8">
        <div className="w-full flex justify-between gap-4 mb-3 ">
          <div className="text-gray-800 w-1/2 mt-2">
            <label className="block">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/2 mt-2">
            <label className="block">Second Name</label>
            <input
              type="text"
              placeholder="Enter Second Name"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-4 mb-3 ">
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Contact Number</label>
            <input
              type="tel"
              placeholder="+91"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Date of Birth</label>
            <input
              type="date"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Gender</label>
            <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-between gap-4 mb-3 ">
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">City</label>
            <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
              <option>Select</option>
            </select>
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">State</label>
            <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
              <option>Select</option>
            </select>
          </div>
          <div className="text-gray-800 w-1/3 mt-2">
            <label className="block">Cluster</label>
            <input
              type="text"
              placeholder="Enter"
              className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      <h3 className="text-green-600">BUSINESS INFORMATION</h3>
      <div className="w-full flex justify-between gap-4 mb-3">
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">Bussiness Type</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">Company Name</label>
          <input
            type="text"
            placeholder="Enter"
            className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 mb-12">
        <div className="text-gray-800 w-1/3 mt-2">
          <label className="block">Address(Business Premises)</label>
          <input
            type="text"
            placeholder="Enter"
            className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500"
          />
        </div>
        <div className="text-gray-800 w-1/2 mt-2">
          <label className="block">Lead Stage</label>
          <select className="input w-full text-gray-500 border border-gray-300 rounded-lg h-9 mt-1 px-2 text-sm placeholder:text-gray-500">
            <option>Select</option>
          </select>
        </div>
      </div>

      <button className="btn bg-green-500 text-white px-5 py-2 rounded">
        Save
      </button>
      <button className="btn bg-gray-300 text-black px-5 py-2 rounded ml-3">
        Cancel
      </button>
    </form>
  );
}

const leadTypeContent = {
  DRIVER: <DriverForm />,
  DEALER: <DealerForm />,
  NBFC: <DealerForm />,
  OEM: <DealerForm />,
  INFLUENCER: <DealerForm />,
};

export default function CreateLeadModal({ onClose }) {
  const [selected, setSelected] = useState("Select the partner type");

  return (
    <div className="fixed inset-0 bg-black/40  flex justify-end z-30">
      <div className="w-[650px] h-full bg-white flex flex-col shadow-gray-800 shadow-xl">
        <div className="flex items-center justify-between px-8 py-2 border-b border-gray-200">
          <h2 className="text-lg text-gray-700">Create New Lead</h2>
          <button
            onClick={onClose}
            className="text-xl p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX />
          </button>
        </div>
        <div className="px-8 pt-5 flex flex-col flex-1">
          <span className="text-gray-800">Type of Lead</span>
          {/* buttons to select lead type */}
          <div className="flex gap-3 pt-2">
            {leadTypes.map((type) => (
              <button
                onClick={() => setSelected(type.label)}
                className={`border-2 rounded-lg flex flex-col items-center justify-center w-30 h-18 gap-1 transition 
                  ${
                    selected === type.label
                      ? "border-green-700 text-green-600 "
                      : "border-gray-200 text-gray-800"
                  }`}
              >
                <span
                  className={`text-2xl ${
                    selected === type.label
                      ? "text-green-600 "
                      : "text-gray-700"
                  }`}
                >
                  <IoSettingsOutline />
                </span>
                <span className="text-sm ">{type.label}</span>
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400 ">
            {leadTypeContent[selected]}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
