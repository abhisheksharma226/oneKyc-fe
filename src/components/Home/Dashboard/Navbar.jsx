import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-4">
        <button className="hover:text-gray-300">My Profile</button>
        <button className="hover:text-gray-300">Notifications</button>
      </div>
    </nav>
  );
};

export default Navbar;
