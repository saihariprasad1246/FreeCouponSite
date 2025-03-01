import React from 'react'
import Loader from './Loader'
import NoCoupons from './NoCoupons'
import CouponCard from './CouponCard'

function DisplayCoupons({ loading, coupons, error }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500 text-center font-semibold text-lg">{error}</p>
      ) : coupons.length==0 ? (
        <NoCoupons />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto max-w-7xl">
          {coupons.map((coupon) => (
            <div
              key={coupon._id}
              className=" shadow-lg  hover:shadow-2xl transition-shadow duration-300 flex flex-col "
            >
              <CouponCard
                image={coupon.imgSrc}
                title={coupon.name}
                description={coupon.description}
                id={coupon._id}
                className="h-full"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DisplayCoupons;
