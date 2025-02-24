import React from "react";
import { Link } from "react-router-dom";

const CouponCard = ({ image, name, description, link, id }) => {
  description = description.length > 50 ? description.slice(0, 50) + "..." : description;

  return (
    <Link to={`/description/${id}`} className="block group">
      <div className="relative max-w-sm rounded-3xl shadow-lg overflow-hidden transition-all duration-500 bg-gradient-to-br from-white to-gray-100 hover:shadow-2xl hover:scale-105">
        {/* Coupon Image */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-500 group-hover:bg-opacity-20"></div>
        </div>

        {/* Coupon Details */}
        <div className="p-5">
          <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
            {name}
          </h3>
          <p className="text-gray-600 mt-2">{description}</p>

          {/* Floating Action Button */}
          <div className="mt-4 flex justify-end">
            <span className="px-5 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CouponCard;
