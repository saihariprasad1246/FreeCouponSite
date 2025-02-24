import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import DropdownMenu from "./Dropdown";

function Navbar() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  function isAlphabetOnly(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAlphabetOnly(search)) {
      navigate(`/?search=${search}`, { replace: true });
      setError("");
    } else {
      setError("Please enter a valid search query");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-bold tracking-wide text-blue-400 transition-transform transform hover:scale-110 duration-300"
        >
          FreeCoupons
        </a>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-700 rounded-full overflow-hidden shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400"
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 bg-transparent outline-none text-white placeholder-gray-400 w-48 transition-all duration-300 focus:w-64"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="px-2 text-gray-300 hover:text-white transition-all duration-300"
            >
              <RxCross2 size={20} />
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 transition-all duration-300 flex items-center justify-center"
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Dropdown Menu */}
        <DropdownMenu setSearch={setSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
