import React from "react";
import { Link } from "react-router-dom";

const CouponCard = ({ image, title, description, id }) => {
  description =
    description.length > 50 ? description.slice(0, 50) + "..." : description;

  return (
    <Link
      to={`/description/${id}`}
      className="block group hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-2xl transition-all duration-300">
        <div className="w-full h-30 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
          <Link to={`/description/${id}`}>View Details</Link>
        </div>
      </div>
    </Link>
  );
};

export default CouponCard;
