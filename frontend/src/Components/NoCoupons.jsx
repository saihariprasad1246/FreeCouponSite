import React from "react";

const NoCoupons = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center animate-fadeIn transition-opacity duration-500">
        <svg
          className="w-16 h-16 text-gray-400 mb-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 15h.008v.008H9.75V15zm4.5 0h.008v.008h-.008V15zM8.25 9h7.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 016 13.5v-2.25A2.25 2.25 0 018.25 9z"
          ></path>
        </svg>
        <h2 className="text-xl font-semibold text-gray-700">No Coupons Found</h2>
        <p className="text-gray-500">Check back later for new deals.</p>
      </div>
    </div>
  );
};

export default NoCoupons;
