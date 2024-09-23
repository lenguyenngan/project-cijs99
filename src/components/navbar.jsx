import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-800 text-white">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="h-8" />
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
      <div className="search">
        <i className="fa fa-search text-white"></i>
      </div>
    </header>
  );
};

export default Navbar;
