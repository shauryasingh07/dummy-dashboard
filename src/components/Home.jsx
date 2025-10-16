import React, { useState } from "react";
import HomeHeader from "./headers/HomeHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PiCalendarBlank } from "react-icons/pi";
import { RiEBikeLine } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbBatteryAutomotive } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);
import "../index.css"

// data 
const coldLeads = [
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    referred: "Employee",
    referredID: "24899",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    referred: "Driver",
    referredID: "24899",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    referred: "CRM",
    referredID: "24899",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    referred: "CRM",
    referredID: "24899",
  },

  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    referred: "Dealer",
    referredID: "24899",
  },
];

const serviceRequests = [
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    type: "Battery",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    type: "Charger",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    type: "Charger",
  },
  {
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    type: "Battery",
  },
];

const hotLeads = [
  {
    id: 1,
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    employee: "Vignesh",
    employeeId: "24899",
    stage: "KYC Verification",
    steps: [
      {
        label: "Registration",
        status: "done",
        description: "Awaiting KYC Verification",
      },
      {
        label: "KYC Verified",
        status: "progress",
        description: "Down payment",
      },
      {
        label: "Product assigned",
        status: "progress",
        description: "Physical Verification",
      },
    ],
  },
  {
    id: 2,
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    employee: "Vignesh",
    employeeId: "24899",
    stage: "KYC Verification",
    steps: [
      {
        label: "Registration",
        status: "done",
        description: "Awaiting KYC Verification",
      },
      {
        label: "KYC Verified",
        status: "progress",
        description: "Down payment",
      },
      {
        label: "Product assigned",
        status: "progress",
        description: "Physical Verification",
      },
    ],
  },
  {
    id: 3,
    name: "Samson Raju",
    phone: "+91 901 954 9457",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Bubhaneshwar",
    state: "Odisha",
    employee: "Vignesh",
    employeeId: "24899",
    stage: "KYC Verification",
    steps: [
      {
        label: "Registration",
        status: "done",
        description: "Awaiting KYC Verification",
      },
      {
        label: "KYC Verified",
        status: "progress",
        description: "Down payment",
      },
      {
        label: "Product assigned",
        status: "progress",
        description: "Physical Verification",
      },
    ],
  },
];

const barData = [
  { label: "NBFC 1", approved: 85, rejected: 35 },
  { label: "NBFC 2", approved: 60, rejected: 25 },
  { label: "NBFC 3", approved: 40, rejected: 30 },
  { label: "NBFC 4", approved: 90, rejected: 20 },
];

const Home = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const maxVal = Math.max(...barData.map((d) => d.approved + d.rejected));

  const [selectedMonth, setSelectedMonth] = useState("Current Month");
  const months = [
    "Current Month",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "Custom Range",
  ];

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

  const data = {
    datasets: [
      {
        data: [80, 40, 60], 
        backgroundColor: [
          "#6D9FFF", 
          "#FBD55E", 
          "#E5E7EB", 
        ],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="dashboard-main main w-full bg-blue-100 scrollbar-hide">
      {/* dashboard head */}
      <HomeHeader />
      {/* main page for dashboard */}
      <div className="mt-12 w-full px-5 py-6 scrollbar-hide">
        {/* timeline filter */}
        <div className="flex items-center justify-between rounded-md w-full mx-auto">
          <select
            className="rounded px-2 outline-0 py-1 bg-white text-gray-600"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option value={month}>{month}</option>
            ))}
          </select>
          {/* from-to date */}
          <div className="flex items-center  border border-gray-300 pl-2 py-1 rounded bg-white ">
            <PiCalendarBlank className="text-gray-500 text-lg mr-3" />
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholderText="From Date"
              dateFormat="dd-MM-yyyy"
              className="focus:outline-none focus:border-blue-500 text-gray-700"
            />
            <span className="text-gray-400 mr-3">-</span>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              placeholderText="To Data"
              dateFormat="dd-MM-yyyy"
              popperPlacement="bottom-start"
              className="focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>
        </div>

        {/* sum of services */}
        <div className="w-auto flex justify-between py-5">
          <div className="driver-total bg-white py-4 px-2 flex flex-col gap-3 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-gray-400">Total Drivers</h2>
                <h3 className="nums text-xl mt-1">120</h3>
              </div>
              <div className="bg-pink-50 text-xl text-pink-700 p-2 rounded-lg">
                <RiEBikeLine className="font-extralight" />
              </div>
            </div>
            <div className="border-b-3 border-pink-100"></div>
            <div className="flex gap-15">
              <div>
                <h3 className="nums">140</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">Onboarded</h4>
              </div>
              <div>
                <h3 className="nums">06</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">New</h4>
              </div>
              <div>
                {" "}
                <h3 className="nums">20</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">In-Process</h4>
              </div>
            </div>
          </div>
          <div className="driver-total bg-white py-4 px-3 flex flex-col gap-3 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-gray-400">Total Dealers</h2>
                <h3 className="nums text-xl mt-1">050</h3>
              </div>
              <div className="bg-green-50 text-xl text-green-700 p-2 rounded-lg">
                <PiHandshake />
              </div>
            </div>
            <div className="border-b-3 border-green-100"></div>
            <div className="flex gap-15">
              <div>
                <h3 className="nums">50</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">Onboarded</h4>
              </div>
              <div>
                <h3 className="nums">06</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">New</h4>
              </div>
              <div>
                <h3 className="nums">20</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">In-Process</h4>
              </div>
            </div>
          </div>

          <div className="driver-total bg-white py-4 px-3 flex flex-col gap-3 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-gray-400">Total NBFC'S</h2>
                <h3 className="nums text-xl mt-1">010</h3>
              </div>
              <div className="bg-purple-50 text-xl text-purple-700 p-2 rounded-lg">
                <LiaRupeeSignSolid />
              </div>
            </div>
            <div className="border-b-3 border-purple-100"></div>
            <div className="flex gap-15">
              <div>
                <h3 className="nums">04</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">Onboarded</h4>
              </div>
              <div>
                <h3 className="nums">02</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">New</h4>
              </div>
              <div>
                {" "}
                <h3 className="nums">03</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">In-Process</h4>
              </div>
            </div>
          </div>

          <div className="driver-total bg-white py-4 px-3 flex flex-col gap-3 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-gray-400">Total OEM'S</h2>
                <h3 className="nums text-xl mt-1">010</h3>
              </div>
              <div className="bg-blue-50 text-xl text-blue-700 p-2 rounded-lg">
                <TbBatteryAutomotive />
              </div>
            </div>
            <div className="border-b-2 border-blue-100"></div>
            <div className="flex gap-15">
              <div>
                <h3 className="nums">04</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">Onboarded</h4>
              </div>
              <div>
                <h3 className="nums">01</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">New</h4>
              </div>
              <div>
                {" "}
                <h3 className="nums">02</h3>
                <h4 className="text-sm text-gray-500 leading-5 ">In-Process</h4>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex gap-4 justify-center w-full">
          {/* Cold Leads */}
          <div className="bg-white rounded-xl p-4 flex-1">
            {/* headers and filters */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-gray-700">
                Cold Leads{" "}
                <span className="text-gray-400">({coldLeads.length})</span>
              </h2>
              <div className="flex gap-5 text-gray-600 items-center">
                <select
                  className="outline-0 rounded px-2 py-1 bg-gray-100 "
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map((role) => (
                    <option value={role}>{role}</option>
                  ))}
                </select>
                <FiDownload />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="bg-blue-100 py-2 px-2 rounded mb-1 flex gap-23">
              <div className="text-sm font-semibold text-gray-500">
                Driver Details
              </div>
              <div className="text-sm font-semibold text-gray-500 ">
                Location
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Referred
              </div>
            </div>
            <div className="overflow-y-auto max-h-[243px] scrollbar-hide scroll-smooth">
              {coldLeads.map((row) => (
                <div className="flex items-center gap-10 py-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center">
                    <img
                      src={row.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0"
                    />
                    <div className="truncate overflow-hidden whitespace-nowrap w-25">
                      <span>{row.name}</span>
                      <span className="block text-xs text-gray-400">
                        {row.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col truncate overflow-hidden whitespace-nowrap w-26">
                    <span>{row.location}</span>
                    <span className="text-xs text-gray-400">{row.state}</span>
                  </div>
                  <div className="flex flex-col truncate overflow-hidden whitespace-nowrap">
                    <span>{row.referred}</span>
                    <span className="text-xs text-gray-400">
                      {row.referredID}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Service Requests */}
          <div className="bg-white rounded-xl p-4 min-w-[340px] flex-1">
            {/* header - filters */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-gray-700">
                Service Requests{" "}
                <span className="text-gray-400">
                  ({serviceRequests.length})
                </span>
              </h2>
              <div className="flex gap-5 text-gray-600 items-center">
                <select
                  className="outline-0 rounded px-2 py-1 bg-gray-100 "
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map((role) => (
                    <option value={role}>{role}</option>
                  ))}
                </select>
                <FiDownload />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="bg-blue-100 py-2 px-2 rounded mb-1 flex gap-23">
              <div className="text-sm font-semibold text-gray-500">
                Driver Details
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Location
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Service Type
              </div>
            </div>
            <div className="overflow-y-auto max-h-[243px] scrollbar-hide scroll-smooth">
              {serviceRequests.map((row) => (
                <div className="flex items-center gap-12 py-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center">
                    <img
                      src={row.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0"
                    />
                    <div className="flex flex-col truncate overflow-hidden whitespace-nowrap">
                      <span>{row.name}</span>
                      <span className="block text-xs text-gray-400">
                        {row.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col truncate overflow-hidden whitespace-nowrap">
                    <span>{row.location}</span>
                    <span className="text-xs text-gray-400">{row.state}</span>
                  </div>
                  <div className="">{row.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* data pie */}
          <div className="bg-white rounded-xl px-4 py-4 flex flex-col items-center justify-between">
            <div className="w-full flex justify-between items-center ">
              <span className="text-sm font-semibold">EMI Trends (Days)</span>
              <div className="flex gap-5 text-gray-600 items-center">
                <FiDownload />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="px-6 py-3">
              <div className="relative flex flex-col items-center justify-center w-[210px]">
                <Doughnut
                  data={data}
                  options={{
                    cutout: "75%",
                    plugins: { legend: { display: false } },
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="text-2xl font-semibold">120</div>
                  <div className="text-gray-500 text-sm">Total Drivers</div>
                </div>
              </div>
            </div>
            {/* legend */}
            <div className="flex gap-5 mt-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-xs text-gray-400">Paid</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
                <span className="text-xs text-gray-400">Not Paid</span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="w-full flex gap-4 py-5">
          {/* hot leads */}
          <div className="rounded-xl bg-white p-4 w-[65%]">
            {/* Header and filter */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-gray-700">
                Hot Leads{" "}
                <span className="text-gray-400">({hotLeads.length})</span>
              </h2>
              <div className="flex gap-5 text-gray-600 items-center">
                <select
                  className="outline-0 rounded px-2 py-1 bg-gray-100 "
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  {roles.map((role) => (
                    <option value={role}>{role}</option>
                  ))}
                </select>
                <FiDownload />
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex bg-blue-100 px-4 py-2 rounded-t">
              <div className="flex-1 font-medium text-gray-600">
                Driver Details
              </div>
              <div className="flex-1 font-medium text-gray-600">Location</div>
              <div className="flex-1 font-medium text-gray-600">
                Employee Assign
              </div>
              <div className="flex-1 font-medium text-gray-600">Stage</div>
            </div>

            <div className="overflow-y-auto max-h-[168px] scrollbar-hide scroll-smooth">
              {hotLeads.map((row) => (
                <div
                  key={row.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  {/* Row main */}
                  <div className="flex items-center px-4 py-3 transition-all">
                    <button
                      className="mr-2 focus:outline-none"
                      onClick={() =>
                        setExpandedId(expandedId === row.id ? null : row.id)
                      }
                    >
                      {expandedId === row.id ? (
                        <BiChevronDown className="text-xl text-gray-500" />
                      ) : (
                        <BiChevronRight className="text-xl text-gray-500" />
                      )}
                    </button>
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src={row.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div className="min-w-0">
                        <span className="w-40 truncate" title={row.name}>
                          {row.name}
                        </span>
                        <span className="block text-xs text-gray-400">
                          {row.phone}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col ml-2 truncate">
                      <span>{row.location}</span>
                      <span className="text-xs text-gray-400">{row.state}</span>
                    </div>
                    <div className="flex-1 flex flex-col ml-2">
                      <span>{row.employee}</span>
                      <span className="text-xs text-gray-400">
                        {row.employeeId}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <span className="bg-yellow-50 py-1 px-2 rounded-full text-yellow-600 text-xs">
                        {row.stage}
                      </span>
                    </div>
                  </div>
                  {/* down-drop info */}
                  {expandedId === row.id && (
                    <div className="bg-gray-100 rounded-lg px-2 py-2 mb-2">
                      {/* Top labels */}
                      <div className="flex items-center text-sm mb-1">
                        <span className="flex-1">Registration</span>
                        <span className="flex-1 ml-20">KYC Verified</span>
                        <span className="flex-2 ml-25">Product assigned</span>
                      </div>
                      {/* Timeline bar and dots */}
                      <div className="flex items-center relative mb-1">
                        {/* Registration/step 1 */}
                        <div className="flex-1 flex items-center">
                          <div className="w-7.5 h-7.5 rounded-full bg-green-600 text-white flex items-center justify-center border-4 border-green-200 overflow-hidden">
                            ✓
                          </div>
                          <div className="flex-1 border-b-2 border-green-700"></div>
                        </div>
                        {/* Awaiting KYC */}
                        <div className="flex-1 flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-700 border-3 border-green-200 shadow"></div>
                          <div className="flex-1 border-b-2 border-gray-400"></div>
                        </div>
                        {/* KYC, Product, Physical */}
                        {new Array(4).fill(null).map((_, i) => (
                          <div key={i} className="flex-1 flex items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            {i < 3 && (
                              <div className="flex-1 border-b-2 border-gray-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Bottom labels */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="ml-15">Awaiting KYC Verification</span>
                        <span className="flex-2 text-center">Down payment</span>
                        <span className="flex-1">Physical Verification</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* bar-data */}
          <div className="bg-white rounded-xl p-4 w-[35%]">
            {/* Card head */}
            <div className="w-full flex justify-between items-center mb-6">
              <span className="text-sm font-semibold">Tag NBFC'S</span>
              <div className="flex gap-5 text-gray-600 items-center">
                <FiDownload />
                <BsThreeDotsVertical />
              </div>
            </div>

            {/* Bars */}
            <div className="space-y-4 mt-2 mb-6">
              {barData.map((row, idx) => (
                <div key={row.label} className="flex items-center">
                  <div className="w-16 text-xs text-gray-600 flex-shrink-0">
                    {row.label}
                  </div>
                  <div className="flex-1 flex items-center ml-2 relative h-7">
                    <div
                      className="bg-red-400 rounded-l-lg h-7 flex items-center pl-3 relative z-10"
                      style={{ width: `${(row.rejected / maxVal) * 100}%` }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {row.rejected}
                      </span>
                    </div>
                    <div
                      className="bg-blue-400 rounded-r-lg h-7 flex items-center justify-end pr-3 relative -ml-1 z-0"
                      style={{ width: `${(row.approved / maxVal) * 100}%` }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {row.approved}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
                <span className="text-xs text-gray-500">Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <span className="text-xs text-gray-500">Rejected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
