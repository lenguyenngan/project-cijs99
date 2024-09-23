import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-800 text-white">
      <div className="logo">
        <img src="../logo/logo.png" alt="Logo" className="h-8" />
      </div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-gray-300">
          Trang chủ
        </a>
        <a href="/new-movies" className="hover:text-gray-300">
          Phim mới
        </a>
        <a href="/anime" className="hover:text-gray-300">
          Anime
        </a>
        <a href="/my-list" className="hover:text-gray-300">
          Danh sách của tôi
        </a>
      </nav>
      <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="p-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 p-2">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
