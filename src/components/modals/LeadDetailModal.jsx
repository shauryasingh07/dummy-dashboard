import React, {useState} from "react";
import "../../index.css";
import { useParams, useNavigate } from "react-router-dom";
import { fakeLeads } from "../Leads";
import LeadsHeader from "../headers/LeadsHeader";
import { MdKeyboardArrowLeft, MdOutlineStarOutline } from "react-icons/md";
import { FiDownload, FiPhoneCall } from "react-icons/fi";
import { MdOutlineShare } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import { HiOutlineDocumentMagnifyingGlass, HiArrowTrendingUp  } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";


const categoryTabs = [
  { icon: <HiArrowTrendingUp /> },
  { icon: <FiMessageSquare /> },
  { icon: <FiPhoneCall /> }
];

const LeadDetailModal = () => {
  const [category, setCategory] = useState(0);

  const { leadId } = useParams();
  const navigate = useNavigate();
  const lead = fakeLeads.find((l) => l.id === leadId);

  if (!lead) return null;
  return (
    <div className="w-full detailModal ">
      <LeadsHeader />
      <div className=" bg-blue-100 z-90 mt-13 pt-15 px-5 scrollbar-hide">
        {/* Close button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-16 left-5 text-2xl px-1 py-1 bg-white rounded-lg hover:bg-gray-300"
        >
          <MdKeyboardArrowLeft />
        </button>
        {/* profile section */}
        <div className="bg-white px-4 pt-4 rounded-lg">
          <div className="border-b border-gray-200 flex justify-between">
            <div className="w-3/6 flex items-center gap-4 pb-3 relative">
              <img
                src={lead.photo}
                alt={lead.name}
                className="w-26 h-18 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl text-gray-900">{lead.name}</h2>
                <div className="text-gray-600 flex gap-2">
                  <h2 className="bg-gray-100 px-4 py-1 rounded-xl text-xs ">
                    Male – 45 years
                  </h2>
                  <h2 className="bg-gray-100 px-4 py-1 rounded-xl text-xs">
                    {lead.phone}
                  </h2>
                </div>
              </div>
              <div className="ml-6 text-yellow-500 hover:underline absolute top-2 left-68 flex items-center gap-1 text-xs font-semibold">
                <span className="text-lg">
                  <MdOutlineStarOutline />
                </span>{" "}
                Add to favorites
              </div>
            </div>
            {/* Actions */}
            <div className="text-end">
              <div className="flex gap-5 mb-4">
                <button className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
                  <span>
                    <MdOutlineShare />
                  </span>
                  Share
                </button>
                <button className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
                  <span>
                    <LuPrinter />
                  </span>
                  Print
                </button>
                <button className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
                  <span>
                    <FiDownload />
                  </span>
                  Download
                </button>
              </div>
              <button className="px-6 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                Send Form Link
              </button>
            </div>
          </div>
          <div className="text-sm p-3">
            <h3 className="font-semibold text-gray-600">Address</h3>
            <p className="text-gray-400">
              Sai Sudha, 201, 2nd Street near high end tech street, 3rd block
              new area, KPHB, Hyderabad, Telangana – 500018.
            </p>
          </div>
        </div>

        {/* Lead Journey */}
        <div className="bg-white rounded-lg p-4 mb-6 mt-4">
          <div className="border-b border-gray-300 mb-2">
            {categoryTabs.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCategory(idx)}
                className={`font-semibold py-2 px-4 border-b-2 ${
                  category === idx
                    ? "border-green-600 text-green-700"
                    : "border-transparent text-gray-500"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <div className="text-md mb-1">Lead Journey</div>
          <div className="flex gap-6">
            <div className="flex items-center justify-between mb-4 w-5/6">
              {[
                "Registration",
                "Call Back",
                "Assign Employee",
                "TVR verification",
                "Awaiting for Eligibility check",
                "Downpayment",
              ].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 ${
                        i === 0 ? "bg-green-600" : "bg-yellow-400"
                      } rounded-full`}
                    ></div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      {step}
                    </span>
                  </div>
                  {i < 5 && (
                    <div
                      className={`flex-1 border-b-2 ${
                        i < 2 ? "border-green-400" : "border-yellow-200"
                      } mx-2`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button className="border border-gray-400 rounded-lg w-[80px] h-[70px] px-2 text-xs flex flex-col justify-center items-center gap-1">
                <span>
                  <HiOutlineDocumentMagnifyingGlass />
                </span>
                <h3>Product Assign</h3>
              </button>
              <button className="border border-gray-400 rounded-lg w-[80px] h-[70px] px-2 text-xs flex flex-col justify-center items-center gap-1">
                <span>
                  <HiOutlineDocumentMagnifyingGlass />
                </span>
                <h3>Physical Verification</h3>
              </button>
              <button className="border border-gray-400 rounded-lg w-[80px] h-[70px] px-2 text-xs flex flex-col justify-center items-center gap-1">
                <span>
                  <HiOutlineDocumentMagnifyingGlass />
                </span>
                <h3>Onboarding</h3>
              </button>
            </div>
          </div>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2 items-center">
            <span className="font-bold text-gray-600">Credit Score</span>
            <span className="mt-2 text-2xl text-green-600 font-bold">N/A</span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2 items-center">
            <span className="font-bold text-gray-600">Volt Score</span>
            <span className="mt-2 text-2xl text-orange-500 font-bold">N/A</span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2 items-center">
            <span className="font-bold text-gray-600">Risk Score</span>
            <span className="mt-2 text-2xl text-blue-500 font-bold">N/A</span>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="font-bold text-lg mb-4">Detailed Information</div>
          <table className="w-full text-left text-gray-800">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Full Name</td>
                <td className="py-2">{lead.name}</td>
                <td className="py-2 font-semibold">Contact</td>
                <td className="py-2">{lead.phone}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Product Interested in</td>
                <td className="py-2">Battery</td>
                <td className="py-2 font-semibold">Business Segment</td>
                <td className="py-2">B2B</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Gender</td>
                <td className="py-2">Male</td>
                <td className="py-2 font-semibold">City</td>
                <td className="py-2">New Delhi</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">State</td>
                <td className="py-2">Delhi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailModal;
