import React, { useState, useEffect } from "react";
import axios from "axios";
import { isValidMongoId, Backend_Url } from "../utils/Constants";
import { useParams, useNavigate } from "react-router-dom";

function Coupondescription() {
  const { id } = useParams();
  const [coupondetails, setcoupondetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchCouponDetails = async () => {
    if (!isValidMongoId(id)) {
      navigate("/", { replace: true });
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`${Backend_Url}/description/${id}`);
      setcoupondetails(response.data.data);
    } catch (err) {
      setError("Failed to fetch the coupon");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCouponDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-5xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={coupondetails.imgSrc}
          alt={coupondetails.imgAlt}
          className="w-full h-72 object-cover rounded-xl shadow-md transition-all duration-500 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-lg shadow-lg">
          {coupondetails.category}
        </span>
      </div>

      {/* Description Section */}
      <div className="w-full md:w-1/2 space-y-5">
        <h1 className="text-3xl font-bold text-gray-900">{coupondetails.name}</h1>
        <p className="text-gray-600 leading-relaxed">{coupondetails.description.slice(0,250)}</p>

        {/* Get Coupon Button */}
        <div className="flex justify-start">
          <a
            href={coupondetails.udemyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-500 hover:bg-blue-700 hover:scale-110 hover:shadow-xl"
          >
            Get Coupon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Coupondescription;
