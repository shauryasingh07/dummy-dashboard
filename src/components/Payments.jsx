import React, { useState } from "react";
import { FiDownload, FiEdit3, FiPhoneCall, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import LeadsHeader from "./headers/LeadsHeader";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import LeadDetailModal from "./modals/LeadDetailModal";
import { useNavigate } from "react-router-dom";

const allTabs = [
  { label: "All Leads", count: 45 },
  { label: "Cold Leads", count: 45 },
  { label: "Warm Leads", count: 45 },
];

const categoryTabs = [
  { label: "New", count: 6 },
  { label: "Hot leads", count: 16 },
  { label: "Tag NBFC", count: 6 },
  { label: "Rejected", count: 6 },
];

export const fakeLeads = [
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mayank Agarwal",
    phone: "+91 901 954 9457",
    id: "1234",
    category: "V+B",
    city: "Gurgaon",
    created: "12 April 2025",
    status: "Warm",
  },

  // You can add more lead objects here as needed
];

while (fakeLeads.length < 10) {
  fakeLeads.push({ ...fakeLeads[0] });
}

const Payments = () => {
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedLeadDetail, setSelectedLeadDetail] = useState(null);
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("Driver");
  const roles = [
    "Driver",
    "Dealer",
    "NBFC's",
    "OEM's",
    "Driver(OEM)",
    "Dealer(OEM)",
    "NBFC's",
  ];

  const leadsPerPage = 6;
  const startIndex = (page - 1) * leadsPerPage;
  const endIndex = startIndex + leadsPerPage;
  const paginatedLeads = fakeLeads.slice(startIndex, endIndex);
  const totalPages = Math.ceil(fakeLeads.length / leadsPerPage);

  return (
    <div className="Leads-main main w-full bg-blue-100">
      {/* leads head */}
      <LeadsHeader />

      {/* main page for leads */}
      <div className="w-full flex bg-blue-100">
        {/* leads info */}
        <div className="w-[77%] flex flex-col px-5 mt-20">
          {/* top section tabs */}
          <div className="flex rounded-md gap-10">
            {allTabs.map((item) => (
              <div className="flex-1 flex gap-4 p-2 text-center rounded-md bg-white  items-center justify-center">
                <h3 className="font-semibold text-gray-600 flex-1">
                  {item.label}
                </h3>
                <p className="font-semibold text-2xl bg-gray-200 py-2 px-3 rounded-lg">
                  {item.count}
                </p>
              </div>
            ))}
          </div>

          {/* main section tabs  */}
          <div className=" my-4 bg-white rounded-md">
            {/* Category Tabs + download */}
            <div className="flex justify-between items-center border-b border-gray-200">
              <div className="flex">
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
                    {item.label} ({item.count})
                  </button>
                ))}
              </div>
              <div className="flex items-center mr-3 gap-6">
                <span className="flex gap-2 cursor-pointer items-center hover:text-green-900">
                  <FiDownload size={18} /> <h3>Download</h3>
                </span>
                <span>
                  <select
                    className="outline-0 rounded px-2 py-1 cursor-pointer bg-gray-100 "
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map((role) => (
                      <option value={role}>{role}</option>
                    ))}
                  </select>
                </span>
              </div>
            </div>

            {/* leads table */}
            <div className="overflow-x-auto rounded-l-l-lg-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-blue-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="pl-4 pr-1">
                      <RiCheckboxMultipleBlankLine className="cursor-pointer" />
                    </th>
                    <th className="p-3">Name & Details</th>
                    <th className="p-3">Lead ID</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Created on</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedLeads.map((lead, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="hover:bg-gray-50">
                        <td className="pl-4 pr-1">
                          <input type="checkbox" className="cursor-pointer" />
                        </td>
                        <td
                          className="p-3 flex items-center gap-5 cursor-pointer"
                          onClick={() =>
                            setExpandedRow(expandedRow === idx ? null : idx)
                          }
                        >
                          <img
                            src={lead.photo}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex flex-col ">
                            <span className="font-semibold truncate overflow-hidden whitespace-nowrap w-30">
                              {lead.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {lead.phone}
                            </span>
                          </div>
                        </td>
                        <td className="p-3">{lead.id}</td>
                        <td className="p-3">{lead.category}</td>
                        <td className="p-3">{lead.city}</td>
                        <td className="p-3">{lead.created}</td>
                        <td className="p-3">
                          <span className="rounded-full px-2 py-1 text-xs bg-orange-100 text-orange-500">
                            {lead.status}
                          </span>
                        </td>
                        <td className="p-3 flex space-x-2 items-center">
                          <FiEdit3
                            className="text-gray-600 cursor-pointer hover:text-green-600"
                            title="Edit"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/leads/${lead.id}`);
                            }}
                          />
                          <LeadDetailModal
                            lead={selectedLeadDetail}
                            onClose={() => setSelectedLeadDetail(null)}
                          />
                          <div className="flex space-x-2 items-center border px-2 py-1 rounded-xl">
                            <FiPhoneCall
                              className="text-gray-600 cursor-pointer hover:text-green-600"
                              title="Call"
                            />
                            <FiCalendar
                              className="text-gray-600 cursor-pointer hover:text-green-600"
                              title="Schedule"
                              onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/leads/${lead.id}`);
                            }}
                            />
                            <FaWhatsapp
                              className="text-gray-600 cursor-pointer hover:text-green-600"
                              title="WhatsApp"
                              onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/leads/${lead.id}`);
                            }}
                            />
                          </div>
                        </td>
                      </tr>
                      {expandedRow === idx && (
                        <tr>
                          <td colSpan={8} className="bg-gray-50 p-4">
                            {/* Roadmap Section */}
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center justify-between px-4">
                                <div className="flex flex-col items-center">
                                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  <span className="text-xs mt-1 text-gray-600">
                                    Registration
                                  </span>
                                </div>
                                <div className="flex-1 border-b-2 border-green-400 mx-2"></div>
                                <div className="flex flex-col items-center">
                                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  <span className="text-xs mt-1 text-gray-600">
                                    CRM Call Back
                                  </span>
                                </div>
                                <div className="flex-1 border-b-2 border-gray-300 mx-2"></div>
                                <div className="flex flex-col items-center">
                                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                  <span className="text-xs mt-1 text-gray-600">
                                    Assign Employee
                                  </span>
                                </div>
                                <div className="flex-1 border-b-2 border-gray-300 mx-2"></div>
                                <div className="flex flex-col items-center">
                                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                  <span className="text-xs mt-1 text-gray-600">
                                    Send from Link
                                  </span>
                                </div>{" "}
                                <div className="flex-1 border-b-2 border-gray-300 mx-2"></div>
                                <div className="flex flex-col items-center">
                                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                  <span className="text-xs mt-1 text-gray-600">
                                    Capture Info
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* pagination */}
            <div className="my-2 flex justify-end space-x-2 mr-3">
              {[...Array(totalPages).keys()].map((num) => (
                <button
                  key={num + 1}
                  onClick={() => setPage(num + 1)}
                  className={`px-3 py-1 rounded focus:outline-none ${
                    num + 1 === page ? "bg-green-700 text-white" : "bg-gray-200"
                  }`}
                >
                  {num + 1}
                </button>
              ))}{" "}
            </div>
          </div>
        </div>

        {/* filter section */}
        <div className="w-[23%] mt-13 scrollbar-hide">
          <div className="bg-white flex justify-between p-4">
            <h2 className="font-semibold text-lg text-gray-700">Filters</h2>
            <h3 className="text-xs font-semibold text-blue-400"> Clear all</h3>
          </div>

          {/* Search Input */}
          <div className="w-full flex justify-center py-3">
            <div className="bg-white w-60 flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus:border-green-400 text-sm ">
              <CiSearch className="text-lg text-gray-600" />
              <input
                type="search"
                placeholder="Search..."
                className="focus:outline-none text-gray-600"
              />
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="w-full bg-white pt-5 pb-39 px-4 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className=" text-gray-500">Sort by Location</label>
              <select className="border border-gray-300 rounded px-2 py-2 text-sm bg-gray-50 focus:outline-none">
                <option value="">Select</option>
                {/* Add location options dynamically if needed */}
                <option value="Gurgaon">Gurgaon</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            {/* Date Range Slider */}
            <div className="bg-white px-3 py-4 rounded-md w-full">
              <div className="text-gray-700 mb-5">
                Date Between ( May 01 - Jun 01 )
              </div>

              {/* Custom slider representation */}
              <div
                className="relative flex flex-col items-center w-full"
                style={{ height: "48px" }}
              >
                {/* Track */}
                <div className="w-full h-3 bg-gray-200 rounded-full relative overflow-y-hidden flex items-center">
                  {/* Blue selection bar */}
                  <div className="absolute left-[12%] right-[12%] top-0 h-3 bg-blue-500 rounded-full"></div>
                  {/* Left Thumb */}
                  <div className="absolute left-[12%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-blue-500 rounded-full shadow"></div>
                  {/* Right Thumb */}
                  <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-blue-500 rounded-full shadow"></div>
                </div>
                {/* Label row */}
                <div className="w-full flex justify-between mt-2">
                  <span className="text-sm text-gray-500">May 01</span>
                  <span className="text-sm text-gray-500">Jun 01</span>
                </div>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Sort By</label>
              <select className="border border-gray-300 rounded px-2 py-2 text-sm bg-gray-50 focus:outline-none">
                <option value="">Select</option>
                <option value="cold">Cold leads</option>
                <option value="warm">Warm leads</option>
                <option value="hot">Hot leads</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Sort by Category</label>
              <select className="border border-gray-300 rounded px-2 py-2 text-sm bg-gray-50 focus:outline-none">
                <option value="">Select</option>
                <option value="V+B">V+B</option>
                <option value="Dealer">Dealer</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
