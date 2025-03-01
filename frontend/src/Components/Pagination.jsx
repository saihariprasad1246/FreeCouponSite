import React, { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({ totalCoupons }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation().pathname;
  const totalPages = Math.ceil(totalCoupons / 10);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (location === "/" && searchParams.get("search")) {
      setSearchParams({ pageNo: page, search: searchParams.get("search") || "" });
    } else {
      setSearchParams({ pageNo: page });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-3 py-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center 
          ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-110 shadow-lg"}`}
      >
        <FaChevronLeft className="mr-1" /> Prev
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md 
              ${currentPage === page ? "bg-yellow-400 text-gray-900 scale-110" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center 
          ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-110 shadow-lg"}`}
      >
        Next <FaChevronRight className="ml-1" />
      </button>
    </div>
  );
}

export default Pagination;