'use client'
import React, { useState } from "react"
import { FaUser, FaChartPie, FaCog, FaSignOutAlt, FaBell, FaSearch } from "react-icons/fa"

const DashboardNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="bg-white text-blue-600 p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-200">
          <FaChartPie size={24} />
        </div>
        <h1 className="text-2xl font-bold tracking-wider">Your Web-Hub</h1>
      </div>

      {/* Search Bar */}
      {/* <div className="hidden md:flex items-center border border-blue-950 bg-blue-700 rounded-full px-4 py-2 flex-grow max-w-md mx-4">
        <FaSearch className="text-blue-300 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none text-white placeholder-blue-300 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */}

      {/* Navbar Links & Icons */}
      <div className="flex items-center gap-6">
        <NavbarIcon icon={FaBell} tooltip="Notifications">
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
            3
          </div>
        </NavbarIcon>

        <NavbarIcon icon={FaUser} tooltip="Profile">
          <p className="text-sm py-1 px-2 hover:bg-blue-700 rounded">Profile</p>
          <p className="text-sm py-1 px-2 hover:bg-blue-700 rounded">Account Settings</p>
        </NavbarIcon>

        <NavbarIcon icon={FaCog} tooltip="Settings">
          <p className="text-sm py-1 px-2 hover:bg-blue-700 rounded">Settings</p>
          <p className="text-sm py-1 px-2 hover:bg-blue-700 rounded">Preferences</p>
        </NavbarIcon>

        <NavbarIcon icon={FaSignOutAlt} tooltip="Logout" tooltipClass="bg-red-600">
          <p className="text-sm py-1 px-2 hover:bg-red-700 rounded">Logout</p>
        </NavbarIcon>
      </div>
    </nav>
  )
}

const NavbarIcon = ({ icon: Icon, tooltip, tooltipClass = "bg-gray-800", children }) => (
  <div className="relative group">
    <div className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-200">
      <Icon className="text-xl" />
      {children && children.type === "div" && children}
    </div>
    <div
      className={`absolute hidden group-hover:block ${tooltipClass} text-white p-2 rounded-lg shadow-lg top-14 right-0 mt-2 w-48 z-10`}
    >
      <p className="text-sm font-semibold mb-2">{tooltip}</p>
      {children && children.type !== "div" && children}
    </div>
  </div>
)

export default DashboardNavbar

